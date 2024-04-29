import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';



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
            <h4 className='mb-4'>AYUSH License </h4>
                <p></p>
                <div className="packages">
                    
                   
                </div>
                <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'ayush-license'} />
            </div>
        </div>
    )
}
