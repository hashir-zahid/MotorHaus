import React, { useState, useContext } from 'react'
import { CarContext } from '../../context/CarContext'
import Fuse from 'fuse.js'
import "./Search.css"

function Search() {
    const api = import.meta.env.VITE_API_KEY   //Use your API key
    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const { setSearch } = useContext(CarContext)

    const cars = ["Honda", "Hyundai", "Toyota", "Suzuki", "Kia", "BMW", "Mercedes", "Audi", "Tesla",
        "Ferrari", "Lamborghini", "Porsche", "Bentley", "Rolls-Royce", "Maserati", "Jaguar", "Land Rover",
        "Chevrolet", "Ford", "Nissan", "Mitsubishi", "Mazda", "Subaru", "Peugeot", "Renault", "Bugatti",
        "Aston Martin", "McLaren", "Volvo", "Jeep", "Dodge", "Chrysler", "GMC", "Cadillac", "Lincoln", "Alfa Romeo"]

    const fuse = new Fuse(cars, { threshold: 0.4 })

    const handleChange = (e) => {
        const value = e.target.value
        setQuery(value)
        if (value.length > 0) {
            const results = fuse.search(value)
            setSuggestions(results.map(r => r.item))
        } else {
            setSuggestions([])
        }
    }

    async function handleSearch() {
        if (!query) return
        try {
            const res = await fetch(
                `https://api.marketcheck.com/v2/search/car/active?api_key=${api}&make=${query}&rows=50&start=0`
            )
            const data = await res.json()
            setSearch(data.listings || [])
        } catch (err) {
            console.error("Error fetching cars:", err)
            setSearch([])
        }
    }

    return (
        <div className="center">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="search"
                onKeyDown={(e) => (e.key === "Enter" && handleSearch())}
            />
            <button onClick={handleSearch} className="search-btn">Search</button>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((car, index) => (
                        <li key={index} onClick={() => { setQuery(car); setSuggestions([]) }}>
                            {car}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search
