import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Consultation with field experts",
        "Collection and discovery of required documents",
        "Filling of application",
        "Instant updates on application status",
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
              <h4 className='mb-4'>IJCEPA CERTIFICATION</h4>
              <p>The India-Japan Comprehensive Economic Partnership Agreement (IJCEPA) is a bilateral trade deal designed to enhance economic cooperation and improve trade relations between India and Japan by providing preferential tariff treatment to imports and exports. The IJCEPA certificate, issued under this agreement, serves as evidence that specific transactions qualify for reduced tariffs or other trade benefits. This certificate is crucial for customs clearance and confirms that exported goods are entirely made in either India or Japan.</p>
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
                <ZohoFormService service={'ijcepa-certification'} />
            </div>
        </div>
    )
}
