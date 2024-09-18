import React from 'react'

const ContactUsPage = () => {
  return (
    <div className='contact'>
      <section className='contact-us'>
        <h1>Contact Us</h1>
        <h3>Do you have general questions about PAYLAX or a suggestion on how we could become even more useful?</h3>
        <p>In <span>our FAQ</span> you can find answers to the most frequently asked questions.</p>
        <p>If your question is not included, please send us an email: <span>payylax@outlook.com</span></p>
      </section>

      <section className='more'>
        <h3>Are you interested in integrating PAYLAX into your platform or would you like to suggest a cooperation?</h3>

        <p>Then write us an email: <span>payylax@outlook.com</span> or
        <span>arrange a call with our business team.</span></p>
      </section>
    </div>
  )
}

export default ContactUsPage
