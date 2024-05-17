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
        "Application Drafting ",
        "Post Registration Compliances",
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
              <h4 className='mb-4'>Petrol Pump License</h4>
              <p>In {cityName}, one of the most lucrative business ventures is operating a petrol pump. The business has experienced a surge in recent years due to the steadily rising need for fuel. Additionally, the number of cars on Indian roadways has been rising annually, which has led to an increase in consumption of fuel. Secure Your License, Unlock Opportunities by registering it at RegisterKaro.</p>
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
                <ZohoFormService service={'petrol-pump-license'} />
            </div>
        </div>
    )
}
