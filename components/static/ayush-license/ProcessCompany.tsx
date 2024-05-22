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
      
      <p className="main-para">
        You may follow the given step by step instructions for Company
        to get AYUSH LICENSE:
      </p>
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
                Step 1: GMP Certificate
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
              <div className="ms-1 pe-4">Step 2: COPP Certificate </div>
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
              <div className="ms-1 pe-4">Step 3: Application Form for AYUSH License</div>
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
              <div className="ms-1 pe-4">Step 4: Documents</div>
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
              <div className="ms-1 pe-4">Step 5: Submission of Application</div>
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
              Step 6: Verification of Application
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
            onClick={() => handleActive("7")}
            className={`btn flex ${
              active === "7" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={seven}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              Step 7: Grant of the License
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
            <h3>Step 1: GMP Certificate </h3>
            <p>
            The World Health Organisation has set out rules for Good Manufacturing Practices to oversee the production of drugs/cosmetics and their quality. {cityName} and other countries adhere to these guidelines. Drugs/cosmetics made in {cityName} must also meet these standards and receive a GMP Certificate from the Drug Controller General of {cityName}, which can be obtained through the relevant state's Drug Control Department. This certificate is required when applying for an AYUSH license. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2: COPP Certificate </h3>
            <p>
            The WHO has created the Certificate of Pharmaceutical Products to confirm drug quality when they are exported. It is typically requested by the National Health Authorities of the importing nation, and exporters must obtain it in their country. AYUSH manufacturers planning to distribute products globally must include this certificate when applying for an AYUSH license. Similar to the GMP Certificate, the COPP is issued by the Drug Controller General of {cityName}, with applications accepted by the Drug Control Department of the relevant state. 
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: Application Form for AYUSH License</h3>
            <p>After ensuring you have all required documents, you can start the online application process for an AYUSH License. Form 24D is required for AYUSH manufacturing license, while Form 25E is needed for AYUSH loan license, as per Rule 153 of Drugs and Cosmetics Rules, 1945. The state-specific application can be downloaded from the e-aushadhi portal. 
            
            
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Documents</h3>
            <p>
            The process of AYUSH Registration in {cityName} is done online through an application. The AYUSH License form must be submitted with all required documents in the correct format and with current information. Mistakes in document submission could result in application rejection, so it is advised to gather all necessary documents before starting the application process.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5: Submission of Application</h3>
            <p>
            After downloading the application form, you must manually enter required information such as business location, product details, and staff information. Once completed, scan the application form and submit it on the Department's website with the necessary documents and application fees.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Verification of Application</h3>
            <p>
            The Department will carefully review and validate all provided information. Additionally, the AYUSH Department’s commissioner will inspect your workplace/establishment/factory in person and create a report. The Department will make a decision on your application based on the commissioner's report.

            </p>
          </div>
          <div className={`${active === "7" ? "active" : "none"}`}>
            <h3>Step 7: Grant of the License
</h3>
            <p>
            After reviewing the application and visiting the business's main office/manufacturing facility, the Department will issue the AYUSH license in Form 25D. Typically, it takes about 60 days for the Department to complete the online AYUSH Certificate application form processing.
            </p>
          </div>


          
        </div>
      
     
     
       
       
      </div>
    </div>
  );
};
