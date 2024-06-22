import React, { useEffect, useRef, useState } from 'react'
import "./SectionTwo.css"
import { useContext } from 'react'
import { dataContext } from '../../../../context/dataContext'
function SectionTwo() {
    const {data , isLoading} = useContext(dataContext)
    console.log(data)
    const boxRef = useRef(null)
    const contRef = useRef(null)
    const [box , setBox] = useState(null)
    const [boxWidth , setBoxwidth ] = useState(null)
    const [container , setContainer] = useState(null)
   

    useEffect(()=>{
      const box = boxRef.current
      const width = box.offsetWidth
      const container  = contRef.current
      setBox(box)
      setBoxwidth(width)
      setContainer(container)
      },[boxRef])

  console.log(boxWidth , "here i am" , box , container)
  let currentIndex = 0
  const slide = (index)=> {
    if(index >= 0 && index < 5){
     currentIndex = index
     let translate = -currentIndex *  ((boxWidth/2) + 26)
     container.style.transform = `translateX(${translate}px)`
     container.style.transition = `.5s linear`
     console.log(translate , box)
  }
  }
  function next(){
    slide(currentIndex + 1)
  }
  function prev(){
    slide(currentIndex - 1)
  }
  return (
    <div className='secondSection'>
      <h1>Our Recommended  Collection</h1>
      {isLoading && <div className='loading'>Guy chill the fuck out na network</div>}
        <div className="image-carousel" ref={boxRef}>
            <div className='container' ref={contRef}>
               {data && data.map((items , index)=> {
                if(items.id === 1 || items.id === 3 || items.id === 7 || items.id === 10 || items.id === 6 || items.id === 9){
                  return (
                    <div className='card' key={index}>
                       <div className="image">
                        <img src={items.image} alt=""/>
                       </div>
                       <p className="name">
                        Name : {items.title}
                       </p>
                       <p className="category">
                       Category : {items.category}
                       </p>
                       <p className="price">
                       Price : {items.price}
                       </p>
                    </div>
                  )
                }
               })}
               
               {/* <div className='card' >
                       <div className="image">
                        <img src={ImageOME} alt=""/>
                       </div>
                       <p className="name">
                        Name : Oloyede sajeh
                       </p>
                       <p className="category">
                       Category : Ankara
                       </p>
                       <p className="price">
                       Price :  Lace
                       </p>
                </div>
                <div className='card' >
                       <div className="image">
                        <img src={ImageTwo} alt=""/>
                       </div>
                       <p className="name">
                        Name : Oloyede sajeh
                       </p>
                       <p className="category">
                       Category : Ankara
                       </p>
                       <p className="price">
                       Price :  Lace
                       </p>
                </div>
                <div className='card' >
                       <div className="image">
                        <img src={ImageTjree} alt=""/>
                       </div>
                       <p className="name">
                        Name : Oloyede sajeh
                       </p>
                       <p className="category">
                       Category : Ankara
                       </p>
                       <p className="price">
                       Price :  Lace
                       </p>
                </div>
                <div className='card' >
                       <div className="image">
                        <img src={Imagefour} alt=""/>
                       </div>
                       <p className="name">
                        Name : Oloyede sajeh
                       </p>
                       <p className="category">
                       Category : Ankara
                       </p>
                       <p className="price">
                       Price :  Lace
                       </p>
                </div>
                <div className='card' >
                       <div className="image">
                        <img src={imageFive} alt=""/>
                       </div>
                       <p className="name">
                        Name : Oloyede sajeh
                       </p>
                       <p className="category">
                       Category : Ankara
                       </p>
                       <p className="price">
                       Price :  Lace
                       </p>
                </div> */}

               </div>
            </div>
            <div className="button">
              <div className="prev" onClick={()=>{next()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#061A40" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
              </div>
              <div className="next" onClick={()=>{prev()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#061A40" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg>
              </div>
            </div>
          </div>

  )
}

export default SectionTwo