import React from "react"
import { useParams, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import "./SelectedCar.css"
import { CarContext } from "../../context/CarContext"
import { useContext } from "react"
import Header from "../header/Header"

function SelectedCar() {
  const { favourites, toggleFavourite } = useContext(CarContext)
  const { id } = useParams()
  const location = useLocation()
  const car = location.state?.car

  if (!car) {
    return <h2>Car details not found</h2>
  }
  const isFav = favourites.some((favCar) => favCar.id === car.id)

  return (
    <>
      <div className="container">
        <Header />
        <div className="right">
          <Link to="/favourites" className="fav-link">Favourites</Link>
        </div>
      </div>
      <div className="selected-car">
        <button className="btn"><Link to="/">Back</Link></button>
        <div className="car-container">
          <div className="car-image">
            <h2>{car.build.make} {car.build.model} ({car.build.year})</h2>
            <img
              src={car.media?.photo_links?.[0] || "/src/assets/NoCar.webp"}
              alt={car.build.make}
              onError={(e) => (e.target.src = "/src/assets/NoCar.webp")}
            />
            <li><i className="bi bi-fuel-pump"></i>   {car.build.fuel_type}</li>
            <li><i className="bi bi-speedometer2"></i> {car.miles} mi</li>

            <li className="price"><i class="bi bi-cash"></i> <p>${car.price || "N/A"}</p></li>
          </div>
          <button
            className={`heart-btn ${isFav ? "active" : ""}`}
            onClick={() => toggleFavourite(car)}
          >
            {isFav ? "💛" : "🤍"}
          </button>
          <div className="car-specs">
            <h2><i class="bi bi-car-front"></i> Car Specifications</h2>
            <ul>
              <li><strong>Trim:</strong> {car.build.trim}</li>
              <li><strong>Version:</strong> {car.build.version}</li>
              <li><strong>Body:</strong> {car.build.body_type}</li>

              <li><strong>Cylinders:</strong> {car.build.cylinders}</li>
              <li><strong>Doors:</strong> {car.build.doors}</li>

              <li><strong>Exterior Color:</strong> {car.base_ext_color}</li>
              <li><strong>Interior Color:</strong> {car.interior_color}</li>
              <li><strong>Engine:</strong> {car.build.engine}</li>
            </ul>

            <h2><i className="bi bi-person-fill"></i> Dealer Info</h2>
            <ul>
              <li><strong>Dealer:</strong> {car.dealer?.name}</li>
              <li><strong>Inventory Type:</strong> {car.inventory_type}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedCar
