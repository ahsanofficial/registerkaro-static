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
      
     
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>STEP 1: Login into SEPC online portal</h3>
            <p>
            Login into SEPC online portal, login as a user verify your account to file for SEPC license. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>STEP 2: Fill the application form for SEPC license</h3>
            <p>
            Fill the application form for SEPC license, fill every detail correctly providing false information can leads the cancellation of process along with legal actions against you. While filing the form fill every column carefully. Tell about your product for the export purpose provide necessary details about your business. 
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>STEP 3: Submit the documents asked by the govt.</h3>
            <p>Submit the documents asked by the govt. through their SEPC portal, providing any false document will lead you to legal consequences. Every document uploaded shall be in readable form blur image of such document may create a hurdle in your SEPC process. 
            
            
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>STEP 4: Verification of you uploaded documents</h3>
            <p>
            Verification of you uploaded documents, once the documents are uploaded then the appropriate govt. shall verify every document uploaded by you.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>STEP 5: application and the documents</h3>
            <p>
            Once the officials are satisfied with your application and the documents uploaded, they may issue you the license as per the terms.</p>
          </div>
         
        </div>
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
              STEP 1: Login into SEPC online portal
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
              <div className="ms-1 pe-4">STEP 2: Fill the application form for SEPC license</div>
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
              <div className="ms-1 pe-4">STEP 3: Submit the documents asked by the govt.</div>
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
              <div className="ms-1 pe-4">STEP 4: Verification of you uploaded documents</div>
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
              <div className="ms-1 pe-4">Step 5: application and the documents </div>
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
      
      </div>
    </div>
  );
};
