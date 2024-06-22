import React, { useContext } from 'react'
import { dataContext } from '../../../context/dataContext'
import ImageOne from "./images/image19.png"
import "./ProductInfo.css"

function ProductInfo() {
    const {sendID , data , increase} = useContext(dataContext)
    
  return (
    <div className='productInfo'>
        {data && data.map((item , i)=>{
            if(item.id === sendID){
               return (
                  <div className="container" key={i}>
                     <div className="images">
                        <div className="smallImages">
                         <div className="smallImg">
                <img src={item.image} alt="" />
                </div>
             <div className="smallImg">
                <img src={item.image} alt="" />
                </div>
             <div className="smallImg">
                <img src= {item.image} alt="" />
                </div>
             <div className="smallImg">
                <img src={item.image} alt="" />
                </div>
             </div>
             <div className="big-image">
                <img src={item.image} alt="" />
             </div>
             </div>
             <div className="description">
                <h2>Description</h2>
             <p className='description'>{item.description}</p>
             <div className="button">
                <button onClick={()=>{increase(item.id - 1)}}>
                   ADD TO CART
                </button>
             </div>
           </div>
      </div>
                )
                
            }
            else {
                return null
            }
        })}
    </div>
  )
}

export default ProductInfo