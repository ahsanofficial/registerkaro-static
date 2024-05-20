import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Process Consultation",
        "Collection & Discovery of Documents",
        "Filing of Application along with Required Forms",
        "Renewal Services",
        "Pan India Expert Assistance",
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
              <h4 className='mb-4'>Tea Board Registration</h4>
              <p>The Tea Board of India, established in 1954 under the Tea Act of 1953, serves as the governing body overseeing the tea industry in India. It regulates tea cultivation and enforces quality standards on producers, processors, and exporters of tea. To operate legally, businesses must obtain the applicable licence and registration such as export and distributor licence, manufacturing unit, buyers and flavour registration etc.</p>
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
                <ZohoFormService service={'tea-board-registration'} />
            </div>
        </div>
    )
}
