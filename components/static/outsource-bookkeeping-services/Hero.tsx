import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Transaction Recording",
        "Bank Reconciliation",
        "Financial Reporting",
        "Payroll Processing",
        "Tax Preparation Support",
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
            <h4 className='mb-4'>Outsource Bookkeeping Services</h4>
                <p>Solid infrastructure, safe work procedures, skilled and experienced workforce, industry knowledge, high account outsourcing services, and strong process orientation all contribute to the continuous delivery of excellent work while reducing operating expenses by 30–50%. However, this stat becomes more achievable when you make RegisterKaro your partner on the road business journey. So, if you are considering hiring a professional bookkeeper in your area to outsource Bookkeeping services or searching for nearby online accounting outsourcing providers, this is the end of your search.</p>
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
