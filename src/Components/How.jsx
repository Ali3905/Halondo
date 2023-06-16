import React from 'react'
import "../css/how.css"

const How = () => {
  return (
    // <div className="howcontainer">
    //     <div className="howcontainer-inner">
    //       <div className="how-to-get-started-parent">
    //         <b className="how-to-get">How To Get Started</b>
    //         <div className="frame-parent2">
    //           <div className="sign-up-parent">
    //             <b className="sign-up">Sign Up</b>
    //             <div className="create-an-account">
    //               Create an account, upload documents, and complete a quick
    //               background check.
    //             </div>
    //           </div>
    //           <div className="download-the-courier-app-parent">
    //             <b className="download-the-courier">Download the Courier App</b>
    //             <div className="set-your-availability">
    //               Set your availability within the Courier App and pick up any
    //               available open shifts.
    //             </div>
    //           </div>
    //           <div className="download-the-courier-app-parent">
    //             <b className="earn-money">Earn Money</b>
    //             <div className="once-you-have">
    //               Once you have all the tools you need, you can start making
    //               deliveries to earn extra money.
    //             </div>
    //           </div>
    //         </div>
    //         <div className="apply-now-wrapper">
    //           <b className="apply-now1">Apply now</b>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

      <div className='how'>
        <h2>How to get started</h2>
        <div className='how-container'>
        <div className='how-card'>
            <h3>Signup</h3>
            <p>Create an account, upload documents, and complete a quick background check.</p>
            <button className="btn-primary">Apply Now</button>
        </div>
        <div className='how-card'>
            <h3>Download the Courier App</h3>
            <p>Set your availability within the Courier App and pick up any available open shifts.</p>
        </div>
        <div className='how-card'>
            <h3>Earn Money</h3>
            <p>Once you have all the tools you need, you can start making deliveries to earn extra money.</p>
        </div>
        
        </div>
      </div>
  )
}

export default How
