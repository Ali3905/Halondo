import React from 'react'
import "../css/steps.css"
import step1 from "./img/group-223.svg"
import step2 from "./img/group-2231.svg"


const Steps = () => {
  return (
    <div className="steps">
          <div className="steps-container">
            {/* <div className="rectangle2" /> */}
              <img className="steps-image" alt="" src={step1} />
              <div className="steps-text">
                <div className="steps-heading">Choose Your Schedule</div>
                <div className="steps-para">
                  You are in control of your own schedule and can adjust your
                  weekly availability based on what works for you.
                </div>
              </div>
          </div>
          <div className="steps-container">
            {/* <div className="rectangle2" /> */}
              <img className="steps-image" alt="" src={step2} />
              <div className="steps-text">
                <div className="steps-heading">Get Paid Weekly</div>
                <div className="steps-para">
                  At the end of each week, your earnings and tips will be
                  directly deposited into your account.
                </div>
              </div>
          </div>
        </div>
  )
}

export default Steps
