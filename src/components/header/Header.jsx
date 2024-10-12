import React, { useState } from 'react'
import './header.css'
import logo from '../../images/logo.png'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpen && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src={logo} alt='' width={100} height="auto" />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false)
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyle(menuOpen)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>

            <button className="button">
              <a href="">Contast</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <i className="fa-solid fa-bars-staggered toggel-menu"></i>
        </div>

      </div>

    </section>
  )
}

export default Header
