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
                <p>AYUSH, short for Ayurvedic, Yoga & Naturopathy, Unani, Siddha, and Homeopathy, represent ancient forms of medicine popular in India. Pre-2014, these therapies were unregulated until the establishment of an AYUSH Ministry. This Ministry introduced a regulatory framework for AYUSH businesses in manufacturing, selling, marketing, and exporting products domestically and internationally. AYUSH licenses are now a crucial aspect of this framework, with unlicensed businesses prohibited from operating in India. These licenses are granted by the state AYUSH Ministry under which the business operates, following provisions in the Drugs and Cosmetics Rules, 1945, business involving import/export, drugs, or cosmetics requires compliance with the Drugs and Cosmetics Act of 1940 and the Drugs and Cosmetics Rules of 1945. Any company dealing with herbal, Unani, or ayurvedic products must obtain an AYUSH License. Ancient Indian doctors treated patients with ayurvedic and Unani medicines, known for their lack of side effects, which has contributed to their global popularity over allopathic or homeopathic alternatives.</p>
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
