import React from 'react'
import hero from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="main">
        <div className="text-content">
            <article>
                <h4>PAY & RELAX</h4>
                <h1>The Safest Way to Pay</h1>
            </article>
            
           <p>The <span>PAYLAX</span> escrow protection guarantees maximum security when conducting transactions among strangers.</p>
           <h4>Trade Safe, Fair & International</h4>
        </div>

        <div className="image-content">
        <img src={hero}alt="" />
      </div>
      </div>
      
      <div className="info">
        <ul>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>shield</title><g class="nc-icon-wrapper"><path d="M6.054,11.247c.566,11.719,5.5,19.4,9.638,23.831A34.416,34.416,0,0,0,24,41.641a34.34,34.34,0,0,0,8.308-6.562c4.136-4.434,9.072-12.114,9.638-23.832L24,6.12ZM24.9,12.558l2.368,4.8,5.292.769a1,1,0,0,1,.554,1.705l-3.83,3.734.9,5.27a1,1,0,0,1-1.451,1.054L24,27.4l-4.733,2.488a1,1,0,0,1-1.451-1.054l.9-5.27-3.83-3.734a1,1,0,0,1,.554-1.705l5.292-.769,2.368-4.8A1.039,1.039,0,0,1,24.9,12.558Z" data-color="color-2"></path><path d="M45.274,8.038l-21-6a1,1,0,0,0-.548,0l-21,6A1,1,0,0,0,2,9C2,23.273,7.856,32.544,12.769,37.808a35.668,35.668,0,0,0,10.837,8.111,1,1,0,0,0,.788,0,35.668,35.668,0,0,0,10.837-8.111C40.144,32.544,46,23.273,46,9A1,1,0,0,0,45.274,8.038Zm-11.5,28.4A35.162,35.162,0,0,1,24,43.9a35.176,35.176,0,0,1-9.77-7.454C9.65,31.534,4.206,22.946,4.006,9.752L24,4.04,43.994,9.752C43.794,22.946,38.35,31.534,33.77,36.443Z"></path></g></svg>
            Insolvency protected escrow accounts
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>award 49</title><g class="nc-icon-wrapper"><path data-color="color-2" d="M37,37c-2.614,0-5.027-0.849-7-2.273V46c0,0.347,0.18,0.668,0.475,0.851 s0.662,0.197,0.973,0.044L37,44.118l5.553,2.776C42.694,46.965,42.847,47,43,47c0.183,0,0.365-0.05,0.525-0.149 C43.82,46.668,44,46.347,44,46V34.727C42.027,36.151,39.614,37,37,37z"></path> <path data-color="color-2" d="M37,15c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S42.514,15,37,15z"></path> <path d="M37,1H2C1.447,1,1,1.448,1,2v38c0,0.552,0.447,1,1,1h26v-8.089c-1.861-2.115-3-4.879-3-7.911 c0-6.617,5.383-12,12-12c0.338,0,0.669,0.023,1,0.051V2C38,1.448,37.553,1,37,1z M18,31H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h10 c0.553,0,1,0.448,1,1S18.553,31,18,31z M18,22H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h10c0.553,0,1,0.448,1,1S18.553,22,18,22z M24,13 H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h16c0.553,0,1,0.448,1,1S24.553,13,24,13z"></path></g></svg>
            Regulated banking partner
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>lock portrait</title><g class="nc-icon-wrapper"><path d="M25,46V40H8a1,1,0,0,1-1-1V7A1,1,0,0,1,8,6H34a1,1,0,0,1,1,1V23.08a6.29,6.29,0,0,1,2,0V6a5.006,5.006,0,0,0-5-5H10A5.006,5.006,0,0,0,5,6V42a5.006,5.006,0,0,0,5,5H25.184A2.966,2.966,0,0,1,25,46Z"></path><path data-color="color-2" d="M44,35H41V30a5,5,0,0,0-10,0v5H28a1,1,0,0,0-1,1V46a1,1,0,0,0,1,1H44a1,1,0,0,0,1-1V36A1,1,0,0,0,44,35ZM33,30a3,3,0,0,1,6,0v5H33Z"></path></g></svg>
            SSL/TLS encryption
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>ic_wb_cloudy_48px</title><g class="nc-icon-wrapper"><path d="M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93z"></path></g></svg>
            Server location Germany
            </li>
        </ul>
      </div>

      <div className="standard">
        <p>The standard for secure payments since 2018</p>
      </div>
      
    </section>
  )
}

export default Hero
