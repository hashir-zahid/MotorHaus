import './Header.css'
import logo from "../../assets/Logo.png";

function Header() {    
  return (
      <div className="left">
        <img src={logo} alt="image" className="logo" />
        <h2>MotorHaus</h2>
      </div>
  )

}

export default Header
