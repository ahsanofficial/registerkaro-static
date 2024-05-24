import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Company name approval and SPICe+ form filling",
        "Director Identification Numbers (DIN) and Digital Signature Certificate (DSC)",
        "Drafting of Memorandum of Association & Articles of Association ",
        "Company PAN and TAN",
        "ESI/PF Registration",
        "GST and Other Tax Registration",
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
              <h4 className='mb-4'>Foreign Subsidiary Company Registration</h4>
              <p>Establishing a foreign subsidiary company in India presents a strategic opportunity for international businesses to tap into the country's vast consumer base and rapidly growing market. The registration process of a foreign subsidiary involves acquiring Permanent Account Number (PAN), Director Identification Number (DIN) and Digital Signature Certificate. Subsidiary companies can be registered either as a Private or Public Limited company or as a Limited Liability Partnership. Once registered, subsidiaries operate independently from the parent company and are required to comply with the local laws and regulations.</p>
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
                <ZohoFormService service={'foreign-subsidiary-company-registration'} />
            </div>
        </div>
    )
}
