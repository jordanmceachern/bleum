import React from 'react'
import './social.css'
import facebook from '../facebook.png'
import instagram from '../instagram.png'

const Social = () => {
  return (
    <div id="social">
      <div className="links">
        <a 
          href="https://www.facebook.com/BrittanyMcQuinn/?epa=SEARCH_BOX&jazoest=265100121975011957685684986995861021111128168708410148113117721019012172867710790103108121851101131144883110104815865100119116106118105525210273791225511648735711680867095805010410180571085179999974551101171091071101055112077119" 
          target="_blank" 
          rel="noopener noreferrer">
          <img id="fb" src={facebook} alt="link to facebook" />
        </a>
      </div>
      <div className="links">
        <a 
          href="https://www.instagram.com/brittanymcquinn/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer">
          <img src={instagram} alt="link to instagram"/>
        </a>
      </div>
      <div className="links" id="buyDiv">
        <a 
          href="https://fanlink.to/BrittanyMcQuinn" 
          target="_blank" rel="noopener noreferrer"
          id="buy">
          <p>stream/ buy</p>
        </a>
      </div>
    </div>
  )
}

export default Social
