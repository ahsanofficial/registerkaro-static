import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Annual return filing",
        "Liaising with RBI",
        "Review of annual balance sheet",
        "RBI Returns",
        "MCA Filings",
        "Income Tax Compliances",
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
            <h4 className='mb-4'>Company Registration in Australia</h4>
                <p>Non-banking financial companies (NBFCs) play a vital role in India's financial sector, offering various services like loans and investment management. However, they face numerous compliance challenges due to complex and evolving regulatory frameworks. These regulations encompass a wide range of activities, including maintaining statutory registers, submitting financial statements, and adhering to prudential norms. To ensure compliance, NBFCs must meet various requirements, such as obtaining RBI accounts, setting up XBRL files, and submitting regular returns. Failure to comply can lead to severe penalties, including license revocation and closure. NBFCs must navigate these challenges diligently to maintain their operations and integrity within the financial landscape.</p>
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
