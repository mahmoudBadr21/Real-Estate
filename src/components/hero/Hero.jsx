import React from 'react'
import './hero.css'
import hero from '../../images/hero-image.png'
import DynamicCounter from './DynamicCounter'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <section className='hero-wrapper'>
      <div className="hero-container flexCenter paddings innerWidth">

        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{y: "2rem", opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 2.5,
                type: "spring"
              }}
            >
              Discover <br/> Most Suitable<br/> Property
            </motion.h1>
          </div>

          <div className="hero-des flexColStart secondaryText">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt.</span>
            <span>Lorem ipsum dolor  amet consectetur adipisicing elit. Voluptate, deserunt.</span>
          </div>

          <div className="search-bar flexCenter">
            <i className="fa-solid fa-magnifying-glass-location "></i>
            <input type="text" />
            <button className='button'>Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <DynamicCounter start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <DynamicCounter start={1900} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customars</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <DynamicCounter start={0} end={28} duration={2} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </div>

        </div>

        <div className="hero-right">
          <motion.div
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2.5,
              type: "spring",
            }}
            className="image-container"
          >
            <img src={hero} alt='' width={"auto"} height={"unset"} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
