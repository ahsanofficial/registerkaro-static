import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Expert Advisory",
        "Comprehensive Documentation",
        "Post Registration Compliance",
        "Company Annual Filing",
        "Process Consultation",
        "Certificate Procurement",
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
              <h4 className='mb-4'>Trademark Opposition</h4>
              <p>Trademark opposition is a pivotal process in the protection of intellectual property rights in the market place which safeguards the repo, brand value, and goodwill of the company. Many times, it is expected that some may try to penetrate through the shield of protection for your Intellectual property. Therefore, the Indian Legislation offers you the benefit of Trademark opposition, which becomes a powerful tool in the protection of your trademark. Registerkaro helps you navigate the protection prospect of your tool, both in terms of safeguarding your pre-existing trademark or the trademark you intend to file.</p>
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
                <ZohoFormService service={'trademark-opposition'} />
            </div>
        </div>
    )
}
