import React, { useContext, useEffect, useRef } from 'react'
import "./SectionFive.css"
import { dataContext } from '../../../../context/dataContext'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function SectionFive() {

  const {data , isLoading} = useContext(dataContext)
 
  const cardRef = useRef([])
  cardRef.current = []

  const addRef = (el)=>{
      if(el && !cardRef.current.includes(el)){
        cardRef.current.push(el)
      }
    const cards = cardRef.current
    cards.forEach(card =>{
      card.addEventListener("mouseenter" , ()=>{
        card.classList.add("active")
      })
      card.addEventListener("mouseleave" , ()=>{
        card.classList.remove("active")
      })
    })
}
  return (
    <div className="FifthSection">
        <h2>Catgegories Available</h2>
        {isLoading && <div className='loading'>Loading the available <i>Categories</i> </div>}
       <div className="categories">
         {data && data.map((categoryImg , index)=>{
            if(categoryImg.id === 1 || categoryImg.id === 4 || categoryImg.id === 7 || categoryImg.id === 9 ){
              return (
                <div className="cards" key={index}>
                  {categoryImg.id === 1 ? <Link to="/men">
                  <div className="card"  ref={addRef}>
                <div className="image">
                   <img src={categoryImg.image} alt="" />
                </div>
                  </div>
                  </Link> : categoryImg.id === 4 ? <Link to="/women">
                  <div className="card"  ref={addRef}>
                <div className="image">
                   <img src={categoryImg.image} alt="" />
                </div>
                  </div>
                  </Link> : 
                  categoryImg.id === 7 ? <Link to="/jewelery">
                  <div className="card"  ref={addRef}>
                <div className="image">
                   <img src={categoryImg.image} alt="" />
                </div>
                  </div>
                  </Link> :
                  categoryImg.id === 9 ? <Link to="/electronics">
                  <div className="card"  ref={addRef}>
                <div className="image">
                   <img src={categoryImg.image} alt="" />
                </div>
                  </div>
                  </Link> : null }
              </div>
              )
            }
         })}
       </div>
    </div>
  )
}

export default SectionFive