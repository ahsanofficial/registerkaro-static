import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
       " Expert Advisory",
       " Process Consultation",
       " Notice Drafting",
       " Post Notice follow up",
       " Suit Assistance ",
       " Legal Consultation",
        
    ]
}
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
            <h4 className='mb-4'>Rubber Board Registration</h4>
                <p>Exporting business has taken over the world, it has increased significantly. Exporting is an important factor in increasing the economy of a country. The government of India has taken multiple steps in building trust with other countries for exporting goods from the country to others one of them is setting up a group of counsellors who can make decisions regarding exporting goods from the country. Similarly, this group of counsellors came up with a statutory body the Rubber Board of India, which the Rubber Act governs, this act came in 1947.</p>
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
                <ZohoFormService service={'Rubber-Board-Registration'} />
            </div>
        </div>
    )
}
