import React from 'react'
import "./Footer.css"
function Footer() {
  return (
     <div className="Footer">
        <div className="moreInfo">
            <div className="nameComInfo">
            <div className="nameInfo">
                <h3>FASHION</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            </div>
            <div className="companyInfo">
                <p>Company</p>
                <ul>
                    <li>About us</li>
                    <li> Career</li>
                    <li>Blog</li>
                    <li>FAQs</li>
                </ul>
            </div>
            </div>
            <div className="otheInfo">

            <div className="otherInfo">
                <p>Need Help?</p>
                <ul>
                    <li>Contact us</li>
                    <li>Shipping services</li>
                    <li>Payment options</li>
                    <li>REturns & Exchange</li>
                </ul>
            </div>
            <div className="socialInfo">
                <p>Follow us</p>
                <ul>
                <li>Instagram</li>
                <li>Fcaebook</li>
                <li>Twitter</li>
                <li>Snapchat</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="copyright">
            Copyright @ Kartrik Bansal 2022. All right Reserved
        </div>
     </div>
  )
}

export default Footer