import React, { useContext } from 'react'
import { dataContext } from '../../../context/dataContext'
import "./CartBox.css"
function Cart() {
    const {cartItems , data , decrease} = useContext(dataContext)
    
  return (
    <div className='cart'>
      {data && data.map((item , i )=>{
        if(cartItems[i] > 0){
          console.log(item)
          return (
          
       <div className="container" key={i}>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="price">
          <p>Price {item.price} </p>
          </div>
          <div className="qty">
            <p> 
            <i>
           Qty :  { Number(cartItems[i])}
            </i>
            </p>
          </div>
          <div className="totalPrice">
            <p>
              <i>
          Total price :  {item.price * cartItems[i]}
              </i>
            </p>
          </div>
          <div className='button'>
            <button onClick={()=>{decrease(item.id - 1)}}>Delete</button>
          </div>
      </div>
          )
        }
        else if (cartItems[i] = 0) {
          return (
            <p>No item you have added</p>
          )
        }
        else {
          return null
        }
      })}
    </div>
  )
}

export default Cart