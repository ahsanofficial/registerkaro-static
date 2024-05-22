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
            <h4 className='mb-4'>Transfer Pricing Agreement</h4>
                
                <p>Transfer pricing involves establishing the price for goods or services exchanged between affiliated businesses or corporations. Transfer pricing allows for enhancements in pricing, enhances efficiency, and streamlines the accounting process. It also allows for cost savings in manpower by improving processes and techniques. Transfer pricing aids in increasing profitability and also emphasizes the strategic planning of corporate activities.</p>
                

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
                <ZohoFormService service={'transfer-pricing-agreement'} />
            </div>
        </div>
    )
}
