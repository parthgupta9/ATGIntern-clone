import React from 'react'
import myimage from './assets/HobbyCue Logo.jpg'
import './navbar.css'
import search from './assets/Group 17 (1).png'
import explore from './assets/Explore.png'
// import down from './assets/icons8_expand_arrow 1.png'
import Hoobies from './assets/Hobbies.png'
import bookmark from './assets/bookmark_black_24dp 1.png'
import product from './assets/Product 3.png'
import notification from './assets/notifications_black_24dp 1.png'


const Navbar = () => {

  return (
    <div className="navbarr" style={{backgroundColor: '#FFFFFF',}}><nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={myimage} className="image-fluid" alt='' id='first'></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search" id='second'>
          <input className="form-control me-2" type="search" placeholder="Search here" id='third' aria-label="Search"/>
         <img src={search} id='fourth' alt=''></img>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='fifth'>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='six'>
            <img src={explore} alt='' ></img>
             <b className='b'>Explore</b>
              {/* <img src={down} alt='' className='down'></img> */}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">People Community</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Places-Venue</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Programs Events</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Products Badge</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Blogs</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id ="sev">
           <img src={Hoobies} alt='' ></img>
           <b className='b'>Hobbies</b>
           </a>
           <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">People Community</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Places-Venue</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Programs Events</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Products Badge</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Blogs</a></li>
            </ul>
         </li>
        
       <li className="nav-item linked">
            <a className="nav-link disabled" aria-disabled="true"><img src={bookmark} alt=''></img></a>
          </li>
          <li className="nav-item linked">
            <a className="nav-link active" aria-current="page" href="#"><img src={notification} alt=''></img></a>
          </li>
          <li className="nav-item linked">
            <a className="nav-link" href="#"><img src={product} alt=''></img></a>
          </li>
          <li className="nav-item linked">
            <a className="nav-link" href="#">
            <button type="button" className="btn btn-outline-primary" disabled id= 'eight'> <b>Sign In</b></button>
            </a>
          </li>
          
         
        </ul>
      
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar