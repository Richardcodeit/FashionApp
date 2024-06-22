import React from 'react'
import "./SectionOne.css"
import image from "./image532.png"
function SectionOne() {
  return (
      <div className="firstSection">
       <div className="content">
           <h1>
               Make Your Style Looks Perfect
           </h1>
           <p>
           Our collection will help your fashion looks better and we will provide the best product for you.
           <br />
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           <br />Dolore, ullam enim non exercitationem hic totam suscipit cupiditate quam asperiores facere minus
           <br /> ratione necessitatibus dicta blanditiis accusantium nihil excepturi voluptas? Maiores.
           </p>
           <a href="FifthSection">
               SHOP NOW
           </a>
       </div>
       <div className="image">
           <div className="img">
               <img src={image} alt="" />
           </div>
       </div>
      </div>
     )
}

export default SectionOne