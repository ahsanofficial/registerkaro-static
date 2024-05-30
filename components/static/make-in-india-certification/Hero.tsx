import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Expert Advisory",
        "Process Consultation",
        "Notice Drafting",
        "Post Notice follow up",
        "Suit Assistance ",
        "Legal Consultation",
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
                <h4 className='mb-4'>Make in India Certification</h4>
                <p>To help boost the economy, a country needs to promote industrialisation in their domestic regions, a certification is one way to ensure that the products associated with a particular company pass certain qualifications and meet certain criteria and make-in India is one of them. Make-in-India certification was introduced to build the concept of initiating or encouraging various commercial sectors to manufacture their products in India and sell them worldwide across multiple countries. This would help in increasing the economy of India by providing employment opportunities and promoting industrialisation to some extent in India</p>
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
                <ZohoFormService service={'make-in-india-certification'} />
            </div>
        </div>
    )
}
