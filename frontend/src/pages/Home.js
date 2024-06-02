import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="Home-Page text-white container-fluid d-flex justify-content-center align-items-center">
        <div className="row container">
            <div className="col-lg-6 d-flex justify-content-center  align-items-lg-start flex-column"
            style={{height:"91.5vh"}}>
                <h2 style={{fontSize:"50px"}}>
                Beauty begins the moment you decide to be yourself!!!
                </h2>
                {/* <h3  style={{fontSize:"40px", color:"blue"}}>FOR YOU</h3> */}
                <p className='mb=0' style={{fontSize:"15px" ,color:"gold"}}>Discover the timeless secrets of Ayurveda, the
                 ancient Indian science of life, for radiant and healthy skin. Ayurvedic beauty products are 
                 crafted with natural ingredients that harmonize with your body and the environment, offering 
                 holistic wellness and lasting beauty. Here's why you should consider making the switch to Ayurvedic 
                 beauty products:</p>
                <Link to="/products" className="butt p-2 my-2" style={{ color: 'silver' }}>
              View Products
            </Link>
            </div>         
              <div className="col-lg-6 d-flex justify-content-center align-items-lg-end flex-column">
                <img className='homeimg img-fluid ' src='https://image.harrods.com/kama-ayurveda-bringadi-scalp-hair-oil-100ml_20914756_47111092_2048.jpg' style={{height:"400px",width:"500px", paddingBottom:"50px"}} alt='/'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
