import Image from 'next/image'
import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import ZohoFormService from '../../child_components/ZohoformService';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Expert Advisory",
        "Bank Account opening",
        "Application drafting and filing",
        "Post registration Compliances",
        "Comprehensive Documentation"
    ]
}
interface HeroProps {
    cityName: string;
}
export const Hero = ({ cityName }: HeroProps) => {
  return (
    <div className='hero align-center mobile-flex-column'>
        <Image
            src={bgImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            className="background-image"
        />
        <div className='header-content'>
            <h4>Company Valuation for Startups</h4>
            <p>RegisterKaro is a Company that also provide services for Company Valuation for Startups. We can help with everything from providing advice in the initial phase to ensuring that correct and right results are produced & precise financial analysis is made.</p>
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

