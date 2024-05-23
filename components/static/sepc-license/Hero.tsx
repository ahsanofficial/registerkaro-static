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
        "Application drafting",
        "Post Registration compliances",

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
            <h4 className='mb-4'>SEPC License</h4>
                
                <p>The Indian Government's Ministry of Commerce and Industry established the Services Export Promotion Council (SEPC) to provide guidance and support to the Services Sector for promoting exports of services. Established in 2006, the SEPC has played a key role in facilitating service exports. SEPC's main duties include generating business prospects for both new and current service exporters. To serve as a bridge between the Government and Industry by offering policy suggestions, addressing industry issues, and offering information on both existing and developing global markets in terms of opportunities, challenges, and regulatory structures. To support exports by creating business facilitators such as rewards and planning appropriate market-focused promotional events and activities. To offer a range of grants and programs as announced by the Ministry of Commerce, other relevant government departments, and State Governments.</p>
                

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
                <ZohoFormService service={'sepc-license'} />
            </div>
        </div>
    )
}
