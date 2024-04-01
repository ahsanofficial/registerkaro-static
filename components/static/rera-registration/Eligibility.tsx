import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

const Eligibility = () => {
  return (
    <div id="Eligibility">
        <p className="main-para">You are eligible for RERA Registration Certificate is you fall to be in any of the following category:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
        <Image
            alt=""
            className="Eligibility-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Builders</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Constructors</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Agents</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Advisors</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Other Intermediatory Individuals</li>
            </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Eligibility;


