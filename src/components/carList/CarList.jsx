import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarContext } from '../../context/CarContext'
import './CarList.css'

function CarList() {
    const { search, favourites, toggleFavourite } = useContext(CarContext)
    const navigate = useNavigate()
    const handleCarClick = (id, car) => {
        navigate(`/selectedCar/${id}`, { state: { car } })
    }
    return (
        <ul className="car-list">
            {search.map((car) => {
                const isFav = favourites.some((fav) => fav.id === car.id);
                return (
                    <li key={car.id || Math.random()} className="car-card">
                        <div className="car-image" onClick={() => handleCarClick(car.id, car)}>
                            <img
                                src={car.media?.photo_links?.[0] || "/src/assets/NoCar.webp"}
                                alt={car.build.make}
                                onError={(e) => (e.target.src = "/src/assets/NoCar.webp")}
                            />
                        </div>
                        <div className="car-details">
                            <h3>{car.build.make} {car.build.model}</h3>
                            <p><strong>Engine:</strong> {car.build.engine || "N/A"}</p>
                            <p><strong>Body:</strong> {car.build.body_type || "N/A"}</p>
                            <p><strong>Engine:</strong> {car.build.engine || "N/A"}</p>
                            <p><strong>Color:</strong> {car.base_ext_color || "N/A"}</p>
                            <span className="car-price">${car.price || "N/A"}</span>
                        </div>
                        <button
                            className="heart-btn"
                            onClick={() => toggleFavourite(car)}
                        >
                            {isFav ? "💛" : "🤍"}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}

export default CarList