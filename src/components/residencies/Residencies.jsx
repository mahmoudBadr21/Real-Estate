import React from 'react'
import './residencies.css'
import data from '../../utils/slider.js'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '../../utils/commen'


const Residencies = () => {
  return (
    <>
    <section className='r-wrapper'>
      <div className="r-container paddings innerWidth">

        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="r-card flexColStart">

                    <img src={value.image} alt='' width={"auto"} height={"unset"} />
                    
                    <span className="r-price secondaryText">
                      <span style={{color: "orange"}}>$ </span>
                      <span>{value.price}</span>
                    </span>

                    <span className="primaryText">{value.name}</span>
                    <span className="secondaryText">{value.details}</span>

                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </div>
    </section>
    </>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="r-buttons flexCenter">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </>
  )
}