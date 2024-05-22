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
        "Notice Drafting",
        "Post Notice follow up",
        "Suit Assistance ",
        "Legal Consultation",
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
            <h4 className='mb-4'>Pitch Deck for Start-ups</h4>
                <p>{cityName} in the last decade has witnessed an exceptional rise in entrepreneurial ventures that has led to the increase in multiple number of start-ups. In today's world, merely having an idea is not enough, the way the idea is communicated is an important aspect of having an idea hence comes the pitch deck, it is a document that tells the story about your start-up it is mainly prepared when pitching someone for partnership or while attracting investors for your start-up. Hence, with an increase in the number of start-ups the increase of the importance of pitch decks has also significantly increased.</p>
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
                <ZohoFormService service={'pitch-deck-for-start-ups'} />
            </div>
        </div>
    )
}
