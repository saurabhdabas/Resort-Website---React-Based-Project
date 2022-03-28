import {React, useState} from 'react'
import logo from "../images/logo.png"
import {MdMenu} from 'react-icons/md'
import {Link} from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true)
    console.log("toggleValue:",toggle);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="Beach-Resort"/>
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <MdMenu className="nav-icon"/>
            </button>
          </Link>
        </div>
        <ul className={toggle ? "nav-links show-nav": "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
