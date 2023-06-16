import React from 'react'
import "../css/whyHalondo.css"
import why from "./img/whyleft.svg"

const WhyHalondo = () => {
  return (
    <div className="why-container">
        <div className="why-left">
          <div className="why-text">
            <div className="why-heading">
              <span className="why">Why</span>
              {/* <span className="span">{` `}</span> */}
              <span className="halondo"> Halondo</span>
              <span className="span"> ?</span>
            </div>
            <div className="why-para">
              Halondo couriers are independently contracted and enjoy the
              flexibility of working on their own schedules to deliver great
              food to hungry customers.
            </div>
            <button className="btn-primary">Watch video</button>
          </div>
          {/* <div className="rectangle-parent"> */}
            {/* <div className="rectangle" /> */}
          {/* </div> */}
        </div>
        <img className="why-right-icon" alt="" src={why} />
      </div>
  )
}

export default WhyHalondo
