import React from 'react'
import './footer.css'
import fLogo from '../../images/logo2.png'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className='f-container paddings innerWidth flexCenter'>
        {/* left side */}
        <div className="f-left flexColStart">
          <img src={fLogo} alt='' width={120} height={"unset"} />
          <span className="secondaryText">
            Our vision is to make all people<br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="f-right flexColStart">
          <span className='primaryText'>Information</span>
          <span className="secondaryText">Egypt, Giza, Inside The Sphinx</span>

          <div className="f-menu flexCenter">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
