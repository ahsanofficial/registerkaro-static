import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
       " Sending Legal Notice",
       " Process Consulting",
       "Collection and Discovery of Documents",
       " Drafting and Pleading ",
        
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
            <h4 className='mb-4'>Trademark Infringement</h4>
                <p>Trademark infringement, as defined by Section 29 of the Trademarks Act, involves unauthorized usage of a registered trademark. In {cityName}, trademark infringement is both a civil and criminal offence punishable by both imprisonment and fines. Remedies for infringement include injunction, compensation, and even destruction of infringing goods. Passing off on the other hand is another tool which extends protection to unregistered trademarks. The limitation period for filing a suit for infringement is three years from the date of the alleged infringement.</p>
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
                <ZohoFormService service={'trademark-infringement'} />
            </div>
        </div>
    )
}
