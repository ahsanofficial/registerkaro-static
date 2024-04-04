import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';


interface HeroProps {
    cityName: string;
}

export const Hero = ({ cityName }: HeroProps) => {
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
            <h4 className='mb-4'>Different Types of Companies in {cityName}</h4>
                <p>Before starting any business, it is vital to know the various types of companies in {cityName} for both entrepreneurs and investors.</p>
                <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'private-limited-company-registration'} />
            </div>
        </div>
    )
}
