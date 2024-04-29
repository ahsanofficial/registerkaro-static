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
        "Comprehensive Documentation",
        "Application Drafting ",
        "Post Registration Compliances",
        "Tax Return Filing",
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
                <h4 className='mb-4'>Spice Board Registration</h4>
                <p>Spices Board was established on 26th February 1987 as per the Spices Board Act 1986 (No. 10 of 1986) by merging the former Cardamom Board (1968) and Spices Export Promotion Council (1960). Spices Board operates as one of the five Commodity Boards that operate under the Ministry of Commerce & Industry. It is a self-governing organization in charge of promoting the export of the 52 specified spices and advancing Cardamom (Small & Large) growth.</p>
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
                <ZohoFormService service={'spice-board-registration'} />
            </div>
        </div>
    )
}
