import React, { useContext, useEffect } from 'react'
import "./Item.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { dataContext } from '../../../context/dataContext';
function Item(props) {
    const data = props.data
    const loading = props.loading
    const category = props.category
     const {setSendID , increase} = useContext(dataContext)
    console.log(data)



    const setIdtoInfo = (id)=>{
        setSendID(id)
    }
    return (
        <div className='Items'>
             {loading && <div className='loading'>Loading Maybe na the network</div>}
             {!loading && <h2>Hello welcome to the {category} categories</h2>}
             <div className="container">
             {data && data.map((items , i)=>{
               if(items.category === category){
               return (
               <div key={i} className='card'>
                 <Link to= "/productInfo">
                   <div className="image">
                       <img src={items.image} alt="img" onClick={(()=>{
                        setIdtoInfo(items.id)
                       })} />
                   </div>
       
                 </Link>
                 <div className="contentButton">
                 <div className="content">
                   <p className='title'> {items.title}</p>
                   <p className='price'> ${items.price}</p>
                 </div>
                 <div className="button">
                   <button onClick={(()=>{increase(items.id - 1)})}>
                     Add To Cart 
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
        </div>  
         )
}

export default Item