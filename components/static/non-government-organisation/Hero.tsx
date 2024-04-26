import React from 'react'
import bgImage from '../../../assets/images/static/private-reg/bg.png';
import rightArrow from '../../../assets/images/static/private-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
       " Comprehensive Consultation and Customized Solutions ",
       " Dedicated Account Manager",
       "Document Preparation ",
       "Applic ation Submission",
       "Name Reservation",
       "Status Updates",
       "Legal Compliance Check",
       "Post-Registration Supportal offerings for registered client",

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
                <h4 className='mb-4'>Non-Government Organisation (NGO)</h4>
                <p>Empower Your NGO's Mission with Register Karo - Your Trusted Partner for Seamless NGO Registration Solutions!</p>
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
                <ZohoFormService service={'Non-Government Organisation (NGO) | Rigesterkaro'} />
            </div>
        </div>
    )
}
