import React from 'react'
import "./Header.css"
import { useRef} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Header() {
  const iconRef = useRef(null)
  const navRef = useRef(null)
  const closeIconRef = useRef(null)
  const body = document.body
  console.log(body) 


function changeColor(){
  body.classList.toggle("dark-color")
  console.log("i did")
}
const openNav = ()=>{
if(!navRef.current.classList.contains("active")){
  navRef.current.classList.add("active")
  iconRef.current.classList.add("active")
}
}
const closeNav = ()=>{
  if(navRef.current.classList.contains("active")){
    navRef.current.classList.remove("active")
    iconRef.current.classList.remove("active")
  }
}
  return (
  <div className="header">

    <header className='Header'>
        <h2 className="name" >
            Fashion
        </h2>
            <div className="icon">
              hweloo display
                <div className="icon-img" ref={iconRef} onClick={()=>{openNav()}}> **** </div>
        </div>
        <nav className="navigation" ref={navRef}>
          <div className="close-icon" ref={closeIconRef} onClick={()=>{closeNav()}}>+</div>
            <ul>
                <li onClick={()=>{closeNav()}}><Link to='/'>Home</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/men'>Men</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/women'>Women</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/jewelery'>Jewelery</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/electronics'>Electronics</Link></li>
                <li onClick={()=>{closeNav()}}><Link to="/cart">Cart</Link></li>
                <li> <div className="darkIcon">
                           <svg xmlns="http://www.w3.org/2000/svg" className='dark' width="20" height="20" fill="black" class="bi bi-moon-fill" viewBox="0 0 16 16" onClick={()=>{changeColor()}}>
                           <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                            </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                           <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                            </svg>
            </div></li>
            </ul>
        </nav>
           
    </header>
  </div>
  )
}
export default Header