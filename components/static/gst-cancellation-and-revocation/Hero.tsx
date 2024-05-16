import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Consultation",
        "Document Collection",
        "Application Preparation",
        "Application Filing and Tracking",
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
            <h4 className='mb-4'>GST Cancellation and Revocation</h4>
                <p>The process of GST registration cancellation and revocation is essential for businesses under the Goods and Services Tax regime. Cancellation can occur voluntarily or involuntarily, with specific procedures and reasons outlined for each. Voluntary cancellation allows taxpayers to request the termination of their registration, while involuntary cancellation can be initiated by GST officers for various violations. Revocation, on the other hand, offers businesses the opportunity to reinstate their GST registration after it has been cancelled, either voluntarily or by the tax authorities. The process for revocation involves submitting an application within a specified time frame and satisfying the relevant authorities. It's crucial for businesses to understand these procedures and timelines to ensure compliance with GST regulations.</p>
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
                <ZohoFormService service={'gst-cancellation-and-revocation'} />
            </div>
        </div>
    )
}
