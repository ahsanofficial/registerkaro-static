import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import seven from "../../../assets/images/pvt-reg/HowToRegister/seven.svg";

import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";

interface HeroProps {
  cityName: string;
}

export const ProcessCompany = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      
     
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className="flex-5">
          <button
            onClick={() => handleActive("1")}
            className={`btn flex ${
              active === "1" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={one}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              STEP 1: Visit the Website
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("2")}
            className={`btn flex ${
              active === "2" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={two}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">STEP 2: Login Into the Portal</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("3")}
            className={`btn flex ${
              active === "3" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={three}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">STEP 3: Necessary Details</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("4")}
            className={`btn flex ${
              active === "4" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={four}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">STEP 4: Select Type of Business</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("5")}
            className={`btn flex ${
              active === "5" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={five}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">STEP 5: GST Details</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("6")}
            className={`btn flex ${
              active === "6" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={six}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              STEP 6: Verify & Get Your FIEO Registration
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
        </div>
      <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>STEP 1: Visit the Website</h3>
            <p>
            Go to the FIEO official website and select the 'Membership' tab. Next, select 'How to apply for RCMC registration' and proceed with the additional instructions. The application form can be downloaded from the download tab as well. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>STEP 2: Login Into the Portal</h3>
            <p>
            Clicking on the membership tab will bring you to a different page where you must input your credentials. Provide your username, password, and Import-Export Code (IEC) upon entry. 
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>STEP 3: Necessary Details</h3>
            <p>Under the regular membership section, please enter details such as your export house's name, address, and status. The export house can have a rating of 1 Star, 2 Stars, 3 Stars, 4 Stars, 5 Stars, service exporter, registered member, or be affiliated with EPC, Chamber of Commerce, or Association of Institutes. 
            
            
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>STEP 4: Select Type of Business</h3>
            <p>
            Provide information like the kind of export, the type of company (partnership or corporation), and important people involved like directors and stakeholders.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>STEP 5: GST Details</h3>
            <p>
            Give information on GST along with a authorization letter. It will designate the authority that will act on behalf of the applicant for FIEO.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>STEP 6: Verify & Get Your FIEO Registration</h3>
            <p>
            The last stage involves settling the fees. The yearly subscription fee for various membership categories from April to March. Finally, once the FIEO Registration fees are successfully verified, the applicant will receive their RCMC.

            </p>
          </div>
         


          
        </div>
     
     
     
       
       
      </div>
    </div>
  );
};
