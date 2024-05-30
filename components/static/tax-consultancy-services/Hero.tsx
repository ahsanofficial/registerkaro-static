import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Consultation",
        "GST and other required registration ",
        "Efficacious Filing of Returns and various applicable Forms",
        "Minimising Tax Burdens",
        "Regular Updates and Reviewing",
        
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
            <h4 className='mb-4'>Tax Consultancy Services for Startups</h4>
                <p>Tax Consultancy Services for Startups offer invaluable assistance in navigating the complex tax landscape. With ever-changing regulations, startups often find it challenging to stay compliant. Tax consultants provide expert guidance on tax planning, compliance, and reporting, ensuring startups meet their tax obligations efficiently. By partnering with tax consultancy services, startups can focus on their core activities while ensuring their tax affairs are in order which will contribute to their growth and success in the long term.</p>
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
                <ZohoFormService service={'Tax-consultancy-services'} />
            </div>
        </div>
    )
}
