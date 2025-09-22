import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'
import { CarContext } from '../../context/CarContext'
import CarList from '../carList/CarList'
import './HomePage.css'
import Search from '../search/Search'
import { Link } from 'react-router-dom'

function HomePage() {
  const { search, favourites, toggleFavourite } = useContext(CarContext)
  const navigate = useNavigate()

  const handleCarClick = (id, car) => {
    navigate(`/selectedCar/${id}`, { state: { car } })
  }
  return (
    <>
      <div className="container">
        <Header />
        <Search />
        <div className="right">
          <Link to="/favourites" className="fav-link">Favourites</Link>
        </div>
      </div>
      {search.length === 0 ?
        (
          <div className="intro-page">
            <div className="intro-overlay"></div>
            <div className="intro-content">
              <h1>Welcome to CarHub 🚗</h1>
              <p>Start your journey by searching for your dream car.</p>
              <p className="hint">Use the search bar above to explore!</p>
            </div>
          </div>
        ) :
        <CarList />
      }
    </>
  )
}

export default HomePage
