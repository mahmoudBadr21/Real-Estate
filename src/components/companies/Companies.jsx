import React from 'react'
import './companies.css'

import prologis from '../../images/prologis.png'
import tower from '../../images/tower.png'
import equinix from '../../images/equinix.png'
import realty from '../../images/realty.png'

const Companies = () => {
  return (
    <section className='c-wrapper'>
      <div className="c-container flexCenter paddings innerWidth">
        <img src={prologis} alt='' width={"auto"} height={"unset"} />
        <img src={tower} alt='' width={"auto"} height={"unset"} />
        <img src={equinix} alt='' width={"auto"} height={"unset"} />
        <img src={realty} alt='' width={"auto"} height={"unset"} />
      </div>
    </section>
  )
}

export default Companies
