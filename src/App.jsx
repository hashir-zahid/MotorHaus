import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/HomePage'
import Favourites from './components/favourites/Favourites';
import SelectedCar from './components/selectedCar/SelectedCar';
import  {CarProvider}  from './context/CarContext';

function App() {
  return (
    <CarProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/selectedCar/:id' element={<SelectedCar/>} />
      </Routes>
    </CarProvider>
  )
}

export default App
