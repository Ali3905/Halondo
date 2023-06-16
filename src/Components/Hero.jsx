import React from 'react'
import "../css/hero.css"
import Navbar from './Navbar'

const hero = () => {
  return (

    <div className="herocontainer">
        <Navbar/>
        <div className="hero">
          <div className="herotext">
            <div className="deliver-with-parent">
              <div className="deliver-with">
                <span className="halondo">Deliver with</span>
                <b className="b">{` `}</b>
              </div>
              <b className="halondo1">Halondo</b>
            </div>
            <div className="in-just-a">
              In just a few easy steps, you’ll be cruising towards making extra
              money. It’s a flexible opportunity that you can customize to fit
              your lifestyle.
            </div>
          </div>
          <div className="signup">
            <form className="signupform">
              <div className="sign-up-now">
                Sign Up Now
                </div>

                <div className="name">
              <label for="first_name" className="group">
                <input type="text" name="first_name" id="first_name" placeholder='First Name *' />
              </label>
              <label for="last_name" className="group">
                <input type="text" name="last_name" id="last_name" placeholder='Last Name *' />
              </label>
              </div>

              <label for="email" className="group">
                <input type="email" name="email" id="email" placeholder='Email *'/>
              </label>
             
              <label for="phone" className="group">
                <input type="tel" name="phone" id="phone" placeholder='Phone *' />
              </label>

             <label for="city" className="group">
                <input type="text" name="city" id="city" placeholder='City' />
              </label>
              <label for="language" className="group">
                <input type="text" name="language" id="language" placeholder='Language' />
              </label>
              
              <label htmlFor="courier"className="group check-container">
                <input type="checkbox" name='courier' id='courier' />
                <span>I have read, understand, and agree to the <br/><strong>Courier Agreement</strong></span>
              </label>
              <label htmlFor="privacy"className="group check-container">
                <input type="checkbox" name='privacy' id='privacy' />
                <span>I have read, understand, and agree to the <br/><strong>Courier Agreement</strong></span>
              </label>
              <button className="btn-primary  btn-signup">
                Create Account
              </button>
                <p className="have-account">
                    Already have account. <strong>Login here</strong>
                </p>
            </form>
          </div>
        </div>
        {/* <img className="navbar-icon" alt="" src="/group-263.svg" /> */}
      </div>
  )
}

export default hero
