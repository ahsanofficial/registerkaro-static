import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";

export const ProcessCompany = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      
      <p className="main-para">
      Following are the steps and documents required to obtain lisence 
      </p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>Step 1: As stated in the Payment and Settlement Act</h3>
            <p>
            As stated in the Payment and Settlement Act, one needs to submit an application in the form A, to the Resrve Bank of India office to department handling the payment and settlements. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2: Following making of the application</h3>
            <p>
            Following making of the application, the application is verified by the RBI department. If they feel needs or changes they might make the changes as per their requirements for the applications to be accepted.
            </p>
            <p>In order for the application to be accepted following are the conditions that must be met:</p>
            <p>A. There must be a proper product prototype of the the payment system in the application.</p>
            <p>B. The security systems in the payment system must be functioning at the time of the application, in order to give assurance of the secure system.</p>
            <p>C. Demonstration of the entire procedure of the fund transfer from one bank account to another.</p>
            <p>D. The terms and conditions that the customers would be made to agree upon</p>

          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: If the prodcut is approved</h3>
            <p>
            If the prodcut is approved then the RBI may give the lisecne for operating the payment system, upon complete satisfaction of the product then the business may operate with the lisence.
            </p>
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
                Step 1: As stated in the Payment and Settlement Act
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
              <div className="ms-1 pe-4">Step 2: Following making of the application</div>
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
              <div className="ms-1 pe-4">Step 3: If the prodcut is approved</div>
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
