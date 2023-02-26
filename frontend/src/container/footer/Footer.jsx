import { Contact, Socials } from '@components';
import React from 'react'
import "./footer.scss"


function Footer() {
  return (
    <>
      <section className='container-bg'>
      <div className="footer-container container">
        <div className='footer-details'>
          
          <h1>Thanks for being here!</h1>
          <p>Whether you want a simple, yet stunning, responsive websites or a full eCommerce site, I can help you build everything you need to create a fully personalized, high-quality website.</p>
            
          <div className='feat-left-wrapper'>
            <div className='feat-left-wrapper__inner-left'>
              {/* <img src={ ProfilePhoto } alt='davincecode' className='feat-left-wrapper__prof' /> */}
              <div className='quote-md'>
                <span>
                    "I build custom solutions for clients completely from scratch."
                  </span>
                  <span className='quote-md__name'>
                    Vincent Ybanez
                  </span>
                  <span className='quote-md__title'>
                  Full Stack Software Engineer, Canada
                </span>
              </div>
            </div>
          </div>

        </div>
        
        <div className='contact-column'>
          <Contact />
        </div>
      </div>


        <div className="footer-socials">
          <Socials />
        <small className='copyright'>©2022 COPYRIGHT DAVINCECODE. ALL RIGHTS RESERVED.</small>
        </div>
      </section>
    </>
  )
}


export default Footer;