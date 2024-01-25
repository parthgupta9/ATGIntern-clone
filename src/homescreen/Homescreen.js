import React from 'react'
import '../homescreen/Homescreen.css'
import homescreen from '../assets/Group 27.png'
import sign from '../assets/JoinIN.png'
import main from '../assets/Frame 12032.png'

const Homescreen = () => {
  return (
    <div>
        <div className='d-lg-flex' id='home'>
            <div className='class'>
            Explore your <span className='span'>hobby</span> or <span className='passion'>passion</span>
              <div className='bodyy'>
             <i> Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</i>
             
              </div>
              <div className='block'>
             <i> If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</i>
              </div>
              <div className='image'>
                <img src={homescreen}></img>
              </div>
               
            </div>
            <div>
                <img src={sign} alt='' id='four'></img>
                <img src={main} alt='' id="thir"></img>
           

            </div>
        </div>
    </div>
  )
}

export default Homescreen