import React from 'react'
import '../Card/Card.css'
import People from '../assets/People.png'
import Product from '../assets/Product.png'
import Program from '../assets/Program.png'
import Location from '../assets/location_on_black_24dp 1.png'
const Card = () => {
  return (
    <div >
        <div className="row row-cols-1 row-cols-md-2 g-4" id='nine'>
  <div className="col">
    <div className="card">
      <img src={People} className="card-img" alt="..."/><span className='people'>People</span>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
      </div>
      <button type="button" className="btn " disabled>Connect</button>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Location} className="card-img" alt="..."/><span className='people'>Place</span>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
      </div>
      <button type="button" className="btn btn-outline-secondary" disabled>Meet Up</button>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Product} className="card-img" alt="..."/><span className='people'>Product</span>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
      </div>
      <button type="button" className="btn btn-outline-secondary" disabled>Get it</button>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Program} className="card-img" alt="..."/><span className='people'>Program</span>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
      </div>
      <button type="button" className="btn btn-outline-secondary" disabled>Attend</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card