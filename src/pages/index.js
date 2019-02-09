import React from 'react'
import ImageLoader from '../components/imageLoader/imageLoader'
import Layout from '../components/layout'
import Social from '../components/social/social'
import portrait from '../images/good_0.jpg'
import daniel from '../images/good_2.jpg'

export default () => {
  return (
    <div className='App'>
      <ImageLoader />
      <Layout />
      <div id='aboutus'>
        <div className='spacer' />
        <div>about us</div>
        <img src={portrait} alt='brittany and daniel sitting together' />
        <p>Bleum is an electronic music duo consisting of producer Daniel James
        and singer/songwriter Brittany McQuinn. They began working together in
        2016 after Daniel saw Brittany perform live. Impressed by her pop sensibility,
        he urged her to send him some vocal tracks.</p>
        <p>They haven't stopped making music since. After the release of Brittanyʼs
        solo EP, Bold (produced mostly by Daniel), they tried something untethered
        from each others individual identities. The first single 'Lose You' was released
        and Bleum was born. They've gone on to perform at multiple festivals. Their
        latest single 'Visit' was selected to be on Blundstone Canada's online playlist.</p>
      </div>
      {/* <div id='shows'>
        <div className='spacer' />
        <div>shows</div>
        <img src={tbd} alt='tbd' />
        <p>location - time</p>
        <p>location - time</p>
        <p>location - time</p>
      </div> */}
      <div id='music'>
        <div className='spacer' />
        <div>music</div>
        <img src={daniel} alt='daniel' />
        <Social />
      </div>
    </div>
  )
}
