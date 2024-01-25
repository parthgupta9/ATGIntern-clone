import React from 'react'
import Add from '../assets/Add.png'
import quote from '../assets/quote.png'
import progressbar from '../assets/Audio Track.png'
import abc from '../assets/Group 108.png'
import big from '../assets/Group 99.png'
import '../Testomonial/Testomonial.css'
import footer from '../assets/Footer.png'

const Testomonial = () => {
  return (
    <>
    <div className='test'>
     <div className="cardd">
      <div className='flexx'> <img src={Add} alt='' className='img'></img><h2 className='txt'>Add your own</h2></div>
       
  <div className="card-body">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className='textt'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
    <a href="#" className="btn btn-primary" id='ten'>Add New</a>
  </div>
</div>
    </div>
    <div className='testom'>
    <div className="memo">
     <div className='flexx'> <img src={quote} alt='' className='img'></img><h2 className='txt'>Testomonial</h2></div>
      
 <div className="card-body">
   {/* <h5 className="card-title">Special title treatment</h5> */}
   <p className='textt'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
   <img src={progressbar} id="elev"></img><span><img src ={abc} alt='' id='twelve'></img></span>
 </div>
</div>

   </div>
   <div className='end'>
    <div>
      <div className='hobby'>
   <p className='para'> Your Hobby, Your Community...</p>
    </div>
    <button className='btn ok'>Get Started</button>
    </div>
    <img src={big} alt='' id="twel"></img>
   </div>
   <div>
    <img src={footer} alt=''></img>
   </div>

   </>
  )
}

export default Testomonial