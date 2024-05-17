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

export const ProcessCompany = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      {/* dfsdf */}
      <p className="main-para">
        You may follow the given step by step instructions for Company
        Registration in Dubai:
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
                Step 1: Create an account on the WPC web portal. 
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
              <div className="ms-1 pe-4">Step 2: Select "Apply new ETA"</div>
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
              <div className="ms-1 pe-4">Step 3:  Obtain RF test reports</div>
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
              <div className="ms-1 pe-4">Step 4: Utilizing WPC</div>
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
              <div className="ms-1 pe-4">Step 5: Send off the necessary paperwork</div>
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
                Step 6: Pay the Governmental Charges
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
                Step 7:   WPC certificate is issued
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
            <h3>Step 1:  Create an account on the WPC web portal. </h3>
            <p>
            To apply online, register on the Saral Sanchar Portal. Filling out an online application on the DOT portal and indicating the goods you want to import is the first step in obtaining a WPC license. Upon submitting the online application, the system will generate an import ID for you. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2: Select "Apply new ETA"</h3>
            <p>
            You are need to submit a self-declaration for each commodity you are exporting when requesting an ETA. To find out if your equipment is included on the list of items exempt from WPC ETA approval, use your import ID. You can verify equipment that uses different radio frequencies by entering the ID and captcha code. 
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3:  Obtain RF test reports</h3>
            <p>In order to receive ETA approval and register a WPC license, a qualified laboratory must provide an RF (Radio Frequency) test report. To confirm and guarantee that the imported equipment is inside the designated frequency range and complies with safety regulations, RF test reports are necessary. 
            
            
            </p><br/>
            <p>In 2021, a new guideline addressing RF resting was adopted, which states that RF testing reports from locally accredited labs in India will be approved. formerly need to obtain a WPC license. </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4:  Utilizing WPC</h3>
            <p>
            You will be able to apply for the WPC approval of the gadget you are importing once all the conditions have been satisfied.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5:  Send off the necessary paperwork</h3>
            <p>
            Gather the paperwork needed to register a WPC certificate, then send it both online and offline to the Wireless Planning and Coordination Authority. Your documents will be sent to WPC officials for verification as soon as they are submitted. 
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Pay the Governmental Charges</h3>
            <p>
            To register for the WPC, you must pay the government costs online. Online payments can be made using wallets or debit/credit cards.

            </p>
          </div>
          <div className={`${active === "7" ? "active" : "none"}`}>
            <h3>Step 7: WPC certificate is issued
</h3>
            <p>
            The application is submitted following the verification of the papers. The WPC wing will provide the device-specific WPC certificate. After obtaining a WPC license, importers can import wireless equipment into India with ease. 
            </p>
          </div>


          
        </div>
       
      </div>
    </div>
  );
};
