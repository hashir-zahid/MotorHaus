import { useContext } from "react";
import { CarContext } from "../../context/CarContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./Favourites.css"

function Favourites() {
  const { favourites, toggleFavourite, setFavourites } = useContext(CarContext);

  const navigate = useNavigate()
  const handleCarClick = (id, car) => {
    navigate(`/selectedCar/${id}`, { state: { car } })
  }

  return (
    <>
      <div className="container">
        <Header />
        <button className="btn" onClick={() => (setFavourites([]))}>Clear All</button>
      </div>
      <div className="favourite">
        <button className="btn"><Link to="/">Home</Link></button>
        <h2>My Favourites</h2>
        {favourites.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          <ul className="car-list">
            {favourites.map((car) => (
              <li key={car.id} className="car-card">
                <div className="car-image" onClick={() => handleCarClick(car.id, car)}>
                  <img
                    src={car.media?.photo_links?.[0] || "/src/assets/NoCar.webp"}
                    alt={car.build.make}
                  />
                </div>
                <div className="car-details">
                  <h3>{car.build.make} {car.build.model}</h3>
                  <p><strong>Fuel:</strong> ${car.build.fuel_type || "N/A"}</p>
                  <p><strong>Engine:</strong> {car.build.engine || "N/A"}</p>
                  <p><strong>Price:</strong> ${car.price || "N/A"}</p>
                </div>
                <button
                  className="heart-btn"
                  onClick={() => toggleFavourite(car)}
                >
                  💛
                </button>

              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Favourites;
