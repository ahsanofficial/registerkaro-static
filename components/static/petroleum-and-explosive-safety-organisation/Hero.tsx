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
            <h4 className='mb-4'>PESO(Petroleum and Explosives Safety Organisation) Certification</h4>
                <p>In the fast-paced business world, there are multiple compliances one must adhere to to ensure smooth compliance with the processes, PESO certifications are one of them. This certification regulates the manufacturing, storage, and transportation of hazardous material, this certification not only demonstrates the organisation's efforts to take reasonable steps towards safety but safeguards the business against any future liability. This certification acts for the long-term benefit overall of the organisation as a whole. </p>
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
                <ZohoFormService service={'Petroleum-and-explosives-safety-organisation'} />
            </div>
        </div>
    )
}
