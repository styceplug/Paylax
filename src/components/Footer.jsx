import React from 'react'
import { Link } from 'react-router-dom'
import visa from '../assets/images/visa.png'
import card from '../assets/images/card.png'
import sofort from '../assets/images/sofort.png'
import sepa from '../assets/images/sepa.png'
import pay from '../assets/images/pay.svg'

const Footer = () => {
  return (
    <footer>
      <div className="foot">
          <article>
            <span>Payment Methods</span>
            <div className="media">
               <img src={visa} alt="" />
               <img src={card} alt="" />
               <img src={sofort} alt="" />
               <img src={sepa} alt="" />
            </div>
          </article>

          <article>
            <span>Follow Us</span>

            <div className="media">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>logo fb simple</title><g class="nc-icon-wrapper"><path d="M24.92437,62V36H16V24h8.92437v-8.38004C24.92437,6.49153,30.70333,2,38.84651,2 c3.90067,0,7.25309,0.29041,8.23008,0.42022v9.53975l-5.64773,0.00257C37.00014,11.96253,36,14.06699,36,17.15515V24h12l-4,12h-8v26 H24.92437z"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>logo twitter</title><g class="nc-icon-wrapper"><path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6 c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9 c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2 c1.7,5.2,6.5,9,12.3,9.1c-4.5,3.5-10.2,5.6-16.3,5.6c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.2,0,37.4-20,37.4-37.4 c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2z"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>logo linkedin</title><g class="nc-icon-wrapper"><path d="M44.44853,0H3.54103C1.58791,0,0.00067,1.54948,0.00067,3.46093V44.5364 C0.00067,46.44787,1.58791,48,3.54103,48h40.90751c1.95707,0,3.5508-1.55213,3.5508-3.4636V3.46093 C47.99933,1.54948,46.4056,0,44.44853,0z"></path> <path fill="#FFFFFF" d="M7.11264,17.9948h7.12629v22.90627H7.11264V17.9948z M10.67775,6.60807 c2.27735,0,4.12625,1.84961,4.12625,4.12827c0,2.27929-1.84891,4.12887-4.12625,4.12887c-2.28645,0-4.1302-1.84957-4.1302-4.12887 C6.54755,8.45768,8.39129,6.60807,10.67775,6.60807"></path> <path fill="#FFFFFF" d="M18.70507,17.9948h6.82427v3.13147h0.0976c0.9492-1.8008,3.27213-3.69987,6.73573-3.69987 c7.20827,0,8.5404,4.74293,8.5404,10.91213v12.56253h-7.11853V29.76173c0-2.65627-0.0456-6.0736-3.6992-6.0736 c-3.7044,0-4.2696,2.8952-4.2696,5.88347v11.32947h-7.11067V17.9948z"></path></g></svg>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512"><g><g><polygon points="496,0 376.384,0 198.688,311.264 313.184,512 432.8,512 318.304,311.264 		"></polygon></g></g><g><g><polygon points="149.216,96 36.448,96 101.696,210.912 16,352 128.768,352 214.464,210.912 		"></polygon></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
          </article>

          <article>
            <span>Partner</span>

            <div className="pay">
                <img src={pay} alt="" />
            </div>
          </article>
      </div>
      <div className="foot">
        <article>
            <span>Share this Page</span>

            <div className="media">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>network connection</title><g class="nc-icon-wrapper"><path d="M37,18a8.013,8.013,0,1,0-7.664-5.717L16.277,19.056a8,8,0,1,0,0,9.888l13.059,6.773a8.035,8.035,0,1,0,1.387-2.661L17.664,26.283a7.924,7.924,0,0,0,0-4.566l13.059-6.773A7.982,7.982,0,0,0,37,18Z"></path></g></svg>
                    <p>Share</p>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>logo fb simple</title><g class="nc-icon-wrapper"><path d="M24.92437,62V36H16V24h8.92437v-8.38004C24.92437,6.49153,30.70333,2,38.84651,2 c3.90067,0,7.25309,0.29041,8.23008,0.42022v9.53975l-5.64773,0.00257C37.00014,11.96253,36,14.06699,36,17.15515V24h12l-4,12h-8v26 H24.92437z"></path></g></svg>
                <p>Facebook</p>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>logo twitter</title><g class="nc-icon-wrapper"><path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6 c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9 c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2 c1.7,5.2,6.5,9,12.3,9.1c-4.5,3.5-10.2,5.6-16.3,5.6c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.2,0,37.4-20,37.4-37.4 c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2z"></path></g></svg>
                <p>Twitter</p>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>logo linkedin</title><g class="nc-icon-wrapper"><path d="M44.44853,0H3.54103C1.58791,0,0.00067,1.54948,0.00067,3.46093V44.5364 C0.00067,46.44787,1.58791,48,3.54103,48h40.90751c1.95707,0,3.5508-1.55213,3.5508-3.4636V3.46093 C47.99933,1.54948,46.4056,0,44.44853,0z"></path> <path fill="#FFFFFF" d="M7.11264,17.9948h7.12629v22.90627H7.11264V17.9948z M10.67775,6.60807 c2.27735,0,4.12625,1.84961,4.12625,4.12827c0,2.27929-1.84891,4.12887-4.12625,4.12887c-2.28645,0-4.1302-1.84957-4.1302-4.12887 C6.54755,8.45768,8.39129,6.60807,10.67775,6.60807"></path> <path fill="#FFFFFF" d="M18.70507,17.9948h6.82427v3.13147h0.0976c0.9492-1.8008,3.27213-3.69987,6.73573-3.69987 c7.20827,0,8.5404,4.74293,8.5404,10.91213v12.56253h-7.11853V29.76173c0-2.65627-0.0456-6.0736-3.6992-6.0736 c-3.7044,0-4.2696,2.8952-4.2696,5.88347v11.32947h-7.11067V17.9948z"></path></g></svg>
                <p>Linkedin</p>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>logo whatsapp</title><g class="nc-icon-wrapper"><path d="M0.10739,48l3.37542-12.32542c-2.08204-3.60688-3.17763-7.69894-3.17592-11.89098 C0.31215,10.66928,10.98554,0,24.09976,0c6.36475,0.00253,12.33865,2.47971,16.83067,6.97547 c4.49214,4.49575,6.96465,10.47174,6.96218,16.82712c-0.00531,13.11432-10.67966,23.785-23.79253,23.785h-0.00006h-0.00974 c-3.98213-0.00164-7.89481-1.00024-11.36995-2.89505L0.10739,48z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M18.15336,13.84087 c-0.48253-1.1589-0.97266-1.0021-1.33759-1.02027c-0.34636-0.01724-0.74309-0.02088-1.13941-0.02088 s-1.04036,0.14873-1.5853,0.74366c-0.54492,0.59496-2.08067,2.03281-2.08067,4.958c0,2.92519,2.13022,5.7512,2.42748,6.14787 c0.29723,0.39667,4.19204,6.39961,10.15569,8.97392c1.41836,0.6123,2.52578,0.9779,3.38909,1.25194 c1.42423,0.45222,2.72022,0.38844,3.74456,0.23544c1.14216-0.17059,3.51729-1.43777,4.01272-2.82601 c0.49537-1.38824,0.49537-2.57817,0.34674-2.82608c-0.14856-0.24784-0.54491-0.3966-1.13937-0.69412 c-0.59452-0.29745-3.51734-1.73529-4.06233-1.93359c-0.54491-0.19831-0.9412-0.29746-1.33755,0.29751 c-0.39628,0.59491-1.5356,1.9336-1.88241,2.3302c-0.34674,0.39667-0.69355,0.44627-1.28801,0.14876 c-0.59453-0.29745-2.51008-0.92506-4.7808-2.94978c-1.76725-1.57578-2.96047-3.52215-3.30725-4.11712 c-0.34677-0.59496-0.03689-0.91665,0.26073-1.2129c0.26739-0.26626,0.59446-0.69412,0.89172-1.04118 c0.29723-0.34706,0.39632-0.59497,0.59446-0.99157c0.19818-0.39667,0.09909-0.74372-0.04955-1.04121 C19.83772,17.956,18.64879,15.03077,18.15336,13.84087z"></path></g></svg>
                <p>Whatsapp</p>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>email</title><g class="nc-icon-wrapper"><path d="M42,5H6a5,5,0,0,0-5,5V38a5,5,0,0,0,5,5H42a5,5,0,0,0,5-5V10A5,5,0,0,0,42,5ZM17,28.414,8.414,37A1,1,0,0,1,7,35.586L15.586,27A1,1,0,0,1,17,28.414Zm24.061,8.647a1,1,0,0,1-1.414,0L31,28.414A1,1,0,0,1,32.414,27l8.646,8.646A1,1,0,0,1,41.061,37.061ZM41,12.414,24.707,28.707a1,1,0,0,1-1.414,0L7,12.414A1,1,0,0,1,8.414,11L24,26.586,39.586,11A1,1,0,0,1,41,12.414Z"></path></g></svg>
                <p>Mail</p>
                </div>
            </div>
        </article>
      </div>

      <div className="links">
      <p>© Continental Payment GmbH</p>

      <div className="link">
        <ul>
            <li>Blog</li>
            <li>English</li>
        </ul>

        <ul>
            <li><Link to="contact-us">Contact Us</Link></li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Press</li>
        </ul>

        <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Terms & Conditions Buyers</li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer


