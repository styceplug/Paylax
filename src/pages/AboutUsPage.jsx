import React from 'react'
import pay from '../assets/images/pay.svg'
import eu from '../assets/images/dunno.svg'

const AboutUsPage = () => {
  return (
    <div className='about'>
       <section className='about-us'>
           <article>
            <h3>About us</h3>
            <h1>
            <span class="_1RbTs nq_IH"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>quote</title><g class="nc-icon-wrapper"><path d="M25.50195,52.27904c-5.57094,5.17976-15.05833,3.8102-19.50043-1.67434 c-5.25741-6.47749-6.30715-18.75427,2.85195-29.73619c4.54303-5.44717,10.01811-9.5772,16.41965-12.39008l2.95241,4.75511 c-9.10641,4.4128-15.91278,10.39585-16.8773,20.42689c4.10871,0,7.51761-0.14883,10.55389,0.93763 c3.45683,1.23695,5.55654,3.53097,6.41829,6.16155C29.68742,44.87838,29.02475,49.00361,25.50195,52.27904z M58.51985,52.27904 c-5.57094,5.17976-15.05833,3.8102-19.50043-1.67434c-5.25741-6.47749-6.30716-18.75427,2.85195-29.73619 c4.54303-5.44717,10.0181-9.5772,16.41965-12.39008l2.95241,4.75511c-9.10641,4.4128-15.91278,10.39585-16.8773,20.42689 c4.10871,0,7.51761-0.14883,10.55389,0.93763c3.45683,1.23695,5.55654,3.53097,6.41829,6.16155 C62.70531,44.87838,62.04264,49.00361,58.51985,52.27904z"></path></g></svg></span> With PAYLAX we establish the most secure payment method worldwide
            </h1>
            <p>We believe that existing online payment methods do not offer sufficient protection against fraud.</p>
           </article>
           <p>PAYLAX combines the escrow procedure known from lawyers and notaries with digital technologies. This enables us to set new standards in payment transactions for secure trading - fair, cost-effective, fast.</p>
       </section>
       <div className="standard">
        <p>The standard for secure payments since 2018</p>
      </div>

      <section className='payment'>
        <div className="image-content">
            <img src={pay} alt="" />
        </div>

        <div className="text-content">
            <article>
                <h3>Our banking partner</h3>
                <p><span>Online Payment Platform B.V.</span> is a regulated European payment institution from the Netherlands and provides the payment infrastructure for PAYLAX.</p>
            </article>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
