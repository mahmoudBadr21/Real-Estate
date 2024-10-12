import React from 'react'
import './contact.css'
import contact from '../../images/contact.jpg'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="c-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className="c-left contactModes flexColStart">
          <span className='orangeText'>Our Contect</span>
          <span className='primaryText'>Eesy to Contact us</span>
          <span className='secondryText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem commodi odit voluptatem sapiente.
          </span>

          {/* first row */}
          <div className="row flexStart">
            <div className="mode flexColCenter">
              <div className="flexStart">
                <div className="icon flexCenter">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="detail flexColStart">
                  <span className='primaryText'>Call</span>
                  <span className='secondryText'>01020092209</span>
                </div>
              </div>
              <div className="button flexCenter">
                Call Now
              </div>
            </div>

            {/* second mode */}
            <div className="mode flexColCenter">
              <div className="flexStart">
                <div className="icon flexCenter">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="detail flexColStart">
                  <span className='primaryText'>Chat</span>
                  <span className='secondryText'>01020092209</span>
                </div>
              </div>
              <div className="button flexCenter">
                Chat Now
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row flexStart">
            <div className="mode flexColCenter">
              <div className="flexStart">
                <div className="icon flexCenter">
                  <i className="fas fa-play-circle"></i>
                </div>
                <div className="detail flexColStart">
                  <span className='primaryText'>Vedio Call</span>
                  <span className='secondryText'>01020092209</span>
                </div>
              </div>
              <div className="button flexCenter">
                Vedio Call Now
              </div>
            </div>

            {/* fourth mode */}
            <div className="mode flexColCenter">
              <div className="flexStart">
                <div className="icon flexCenter">
                  <i className="fas fa-comment"></i>
                </div>
                <div className="detail flexColStart">
                  <span className='primaryText'>Massage</span>
                  <span className='secondryText'>01020092209</span>
                </div>
              </div>
              <div className="button flexCenter">
                Massage Now
              </div>
            </div>
          </div>

        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src={contact} alt='' width={"auto"} height={"unset"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
