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
        "Tax Return Filing",
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
            <h4 className='mb-4'>FIEO Registration</h4>
                
                <p>The abbreviation FIEO stands for Federation of Indian Export Organizations. FIEO was established in 1965 by the collaboration of the Ministry of Trade and Commerce and the Private Trade and Industry. The primary goal of the Organization is to boost global trade by supporting and assisting entrepreneurs and exporters in foreign markets. Consequently, FIEO is actively working towards expanding and enhancing India's market and exports.</p>
                <p>An Export House/Star Export House/Trading House is a government-acknowledged company that advocates for the interests of government-acknowledged exporting businesses. FIEO is focused on promoting not only goods exports, but also services exports.</p>
                <p>The FIEO serves as a guide for all Indian businesspeople involved in the export-import sector. FIEO regulates all export-related organizations in {cityName} with the use of FIEO registration. As a result, it assists the Indian government in marketing India's exports. Businessmen can benefit from FIEO registration in a variety of ways, including global exposure, detailed guidance on key areas of global commerce, such as Foreign Trade Policy (FTP), and different exemptions for MSMEs.</p>

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
                <ZohoFormService service={'fieo-registration'} />
            </div>
        </div>
    )
}
