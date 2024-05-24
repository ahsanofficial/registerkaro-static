import Image from 'next/image';
import manBanner from '../../../assets/images/static/private-limited-company-registration/what-time-it-is/man-banner.png'
import phone from '../../../assets/images/static/private-limited-company-registration/what-time-it-is/phone.png'
import whiteTri from '../../../assets/images/static/private-limited-company-registration/what-time-it-is/Polygon 1.png'
import blackTri from '../../../assets/images/static/private-limited-company-registration/what-time-it-is/Polygon 2.png'


const WhatTime = () => {
  return (
    <div className="p-three-what-time-container">
      <div className="container">
        <div className="heading">
          <h2>What is the time required for<span> Registering a Company ?</span> </h2>
          <div className="line"></div>
          <p>On an average it takes around <span>7-10 working days </span> to register a private limited company in india  subject to document verification by MCA .</p>
        </div>
      </div>
      <div className='card-container'>

        <div className="cards">
          <div className='man-img-container'>
            <img src={manBanner.src} alt="" />
          </div>

          <div className='lines'>
            <div className='white-line'/>
            <div className='black-line'/>
          </div>

          <div className='cards-cta'>
            <div className='triangles'>
              <Image src={whiteTri} alt='poly1' className='whiteTriangle'/>
              <Image src={blackTri} alt='poly2' className='blackTriangle'/>
            </div>
            <h4>Book a FREE CONSULTATION with our CA/CS and Company formation experts</h4>
            <button type='button' className='get-free-cons'>
              <Image src={phone.src} alt="phone-icon" height={24} width={24}/>
              <p>Get Free Consultation</p>
            </button>
          </div>
          <button type='button' className='get-free-cons-mobile'>
            <Image src={phone.src} alt="phone-icon" height={24} width={24}/>
            <p>Get Free Consultation</p>
          </button>
          
        </div>
      
      </div>
    </div>
  );
};

export default WhatTime;
