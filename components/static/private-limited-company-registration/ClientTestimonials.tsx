import React from 'react'
import speaker from '../../../assets/images/icons/private-limited-company-registration/carousel/speaker.svg'
import Image from 'next/image'
import Carousel from '../testimonail-test/Carousel'

function ClientTestimonials() {
  return (
    <div className='client-testimonials'>
        <div className='container'>        
            <div className='heading'>
                <h3>Client Testimonials</h3>
                <div/>
            </div>
            <div className='main-content'>
                <div className='left'>
                    <Image src={speaker} alt='reviews' height={250}/>
                    <p>Lets <span>hear what our clients</span> want to say</p>
                    <div />
                </div>
                <div className='right'>
                 <Carousel/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientTestimonials