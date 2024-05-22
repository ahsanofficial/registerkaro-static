import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Comprehensive Financial Forecasting",
        "Investor-Ready Financial Statements",
        "Startup Valuation Models",
        "Fundraising Strategy and Planning",
        "Key Metrics and Performance Indicators",
        "Customized Financial Dashboards",
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
            <h4 className='mb-4'>Financial Modeling for Startups</h4>
                <p>Looking for the easiest way to do Financial Modelling for Startups? You are looking in the right place. We make Financial Modelling for Startups convenient for everyone. So please do not wait and contact us quickly.</p>
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
                <ZohoFormService service={'financial-modeling-for-startups'} />
            </div>
        </div>
    )
}
