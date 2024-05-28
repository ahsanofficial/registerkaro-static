import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Advisory on Payments Bank Business Model",
        "Filing of Payments Bank License Application",
        "Creating a Unique Business Plan",
        "Auditing of Financial Statements",
        "End-to-end Support",
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
                <h4 className='mb-4'>Terms of Use Agreement</h4>
                <p>In the dynamic landscape of banking, Payment Banks have emerged as a transformative force, offering accessible financial services to all. Originating from the vision of the Reserve Bank of India in 2013, these banks stand as beacons of inclusion, bridging the gap between traditional banking and the unbanked masses. With a focus on simplicity and digital innovation, Payment Banks pave the way for seamless transactions and financial empowerment. However, gaining a Payment Bank License is no small feat, requiring meticulous planning, adherence to regulatory standards, and a commitment to serving underprivileged regions. From the initial screening to the establishment of outlets and adherence to strict operational guidelines, the journey of a Payment Bank is fraught with challenges and opportunities.</p>
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
                <ZohoFormService service={'payment-bank-license'} />
            </div>
        </div>
    )
}
