import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Monthly Accounting",
        "Accounting Software",
        "GST Return filing",
        "TDS Return Filing",
        "Monthly Management Reporting (MIS)",
        "Compliance",
        "Monthly 500 Invoices",
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
            <h4 className='mb-4'>Virtual CFO Services</h4>
                <p>Since the ages, businesses had been following the practice of having Chief Financial Officer (CFO) who can certainly guide the businesses to take wise financial decisions fostering the growth and advancing the scope of operations. As the time has been hijacked by the technology, it is not unexpected to see businesses having Virtual CFOs in this current market. To make sure that you are not left behind in time when it comes to market trends, let RegisterKaro assist you in keeping up your business practices up to date to support innovation and growth in the business.</p>
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
                <ZohoFormService service={'private-limited-company-registration'} />
            </div>
        </div>
    )
}
