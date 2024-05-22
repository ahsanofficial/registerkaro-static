import React from 'react'
import ZohoFormService from '../../child_components/ZohoformService';
import { GoogleDiv } from '../GoogleDiv';
import Image from 'next/image';
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';


let hero = {
  "pack_includes": [
      "Comprehensive Trademark Search",
      "Filing and Documentation",
      "Legal Compliance and Advisory",
      "Trademark Monitoring and Enforcement",
      "Renewal and Maintenance Services",
      "Professional Consultation and Support",
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
          <h4 className='mb-4'>International Trademark Registration</h4>
          <p>Many Businesses operating in different countries feel the need to register their Trademarks again and again with the changes in each country to keep their Trademark protected and recognized. This problem of repetitive registration process has been resolved by the Madrid Protocol in association with WIPO, which offers International Trademark Registration to safeguard your Trademark in many countries at once. RegisterKaro helps you in proceeding with this tedious process so that your Trademark is protected wherever your business goes.</p>
          <div className="packages">
            {hero.pack_includes?.map((item: string, n: number) => {
                return (
                    <div key={n} className='package flex w-80'>
                        <div>
                            <Image src={rightArrow} alt='rightArrow' className='rightArrow' />
                        </div>
                        <div>{item}</div>
                    </div>
                );
            })}
          </div>
          <GoogleDiv />
        </div>
        <div className="zoho">
            <ZohoFormService service={'international-trademark-registration'} />
        </div>
    </div>
  )
}
