import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
       "Compliance Assessment",
        "Preparation and Submission of DIR-3 KYC Form",
        "Timely Submission",
        "Reminders and Updates",
        "Resolution of Queries",
        "Coordination with Authorities",
        "Confirmation of Compliance",
        "Post-Filing Support",
        "Customized Solutions",
        "Confidentiality",

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
            <h4 className='mb-4'>DIR 3 eKYC</h4>
                <p>Streamline your compliance with the simplicity of DIR 3 eKYC - Register now with RegisterKaro!</p>
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
                <ZohoFormService service={'DIR-3-Ekyc '} />
            </div>
        </div>
    )
}
