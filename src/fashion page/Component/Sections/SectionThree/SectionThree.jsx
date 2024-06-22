import React from 'react'
import SectionThreeCss from "./SectionThree.css"
import GucciIcon from "./assets/gucci.png"
import dolce from "./assets/dolce.png"
import balenciaga from "./assets/balenciaga.png"
import nike from "./assets/Nike.png"
import vutton from "./assets/vutton.png"
function SectionThree() {
  return (
    <div className="thirdSection">
         <h2>Brands Supported</h2>
         <div className="listofBrands">
            <div className="brand-one">
                <img src={GucciIcon} alt=""  />
            </div>
            <div className="brand-two">
                <img src={vutton} alt=""  />
            </div>
            <div className="brand-three">
                <img src={balenciaga} alt=""  />
            </div>
            <div className="brand-four">
                <img src={dolce} alt=""  />
            </div>
            <div className="brand-five">
                <img src={nike} alt=""  />
            </div>
         </div>
    </div>
  )
}

export default SectionThree