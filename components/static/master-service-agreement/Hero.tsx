import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';


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
            <h4 className='mb-4 fs-2'>Master Service Agreement</h4>
                <p>An essential contract, known as a master service agreement (MSA), outlines the relationship scope between two parties, including terms and conditions for current and future activities and responsibilities. Utilizing MSAs is beneficial, especially for entities with multiple agreements for the same client, as they establish basic terms between vendors and clients at the start of a business relationship.</p>
                <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'master-service-agreement'} />
            </div>
        </div>
    )
}