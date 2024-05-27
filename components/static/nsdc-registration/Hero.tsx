import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Consultancy",
        "Collecting and discovering required documents",
        "Filling of Registration Application",
        "Regular updates on application status",
        "Compliance check",
    ]
}


export const Hero = () => {
    return (
        <div className="hero align-center mobile-flex-column">
            <Image
                src={bgImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={true}
                className="background-image"
            />
            <div className="header-content">
              <h4 className='mb-4'>National Skill Development Corporation (NSDC) Registration</h4>
              <p>The National Skill Development Corporation (NSDC) plays a pivotal role in enhancing skill development in India through various initiatives and schemes. Established as a not-for-profit company under the Ministry of Finance, NSDC focuses on fostering partnerships and funding vocational institutions to promote skill development across different sectors. Offering a wide array of courses and support services, NSDC aims to empower individuals, institutions, and organizations to contribute to India's workforce development. From offering quality training programs to facilitating international opportunities, NSDC's efforts are geared towards upskilling the Indian youth and promoting economic growth. With its diverse range of schemes and initiatives, NSDC provides ample opportunities for individuals and entities to engage in skill development efforts.</p>
              <div className="packages">
                  {hero.pack_includes?.map((i: any, n: number) => {
                      return (
                          <div key={n} className='package flex w-80'>
                              <div>
                                  <Image src={rightArrow} alt='rightArrow' className='rightArrow' />
                              </div>
                              <div>{i}</div>
                          </div>
                      );
                  })}
              </div>
              <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'nsdc-registration'} />
            </div>
        </div>
    )
}
