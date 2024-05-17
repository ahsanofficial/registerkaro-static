import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";




import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import { text } from "stream/consumers";
import { AlignLeft } from "phosphor-react";

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
                Step 1: Board Resolution Meeting
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
              <div className="ms-1 pe-4"> step 2: Check Eligibility</div>
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
              <div className="ms-1 pe-4">Step 3: Filing with the Registrar of Companies (RoC)</div>
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
              <div className="ms-1 pe-4">Step 4: Intimation to RoC</div>
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
              <div className="ms-1 pe-4">Step 5: Execution of Agreement</div>
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
                Step 6: Compliance with Regulations and Other Formalities
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
            <h3>Step 1. Board Resolution Meeting:</h3>
            <p>
            The first step is for the appointment of the Director, to pass a resolution proposing the appointment of a Managing Director by the Board of Directors. This resolution should contain the terms and conditions of appointment, tenure, responsibilities, remuneration, and any other relevant details.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Check Eligibility:</h3>
            <p>
            A person who is nominated for the Managing Director must not be disqualified under Section 164 of the Companies Act, 2013, and should meet any other qualifications specified in the AoA.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3> Step 3. Filing with the Registrar of Companies (RoC):</h3>
            <p>
            After obtaining shareholder approval, the company needs to file the necessary forms and documents with the Registrar of Companies (RoC) within 30 days of the appointment. Form MGT-14 shall be filed for the passing of the special resolution along with other relevant documents.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4. Intimation to RoC:</h3>
            <p>
            By filing Form DIR-12 along with the requisite fee and supporting documents, the company must inform the RoC about the appointment of the Managing Director within 30 days of such appointment.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5. Execution of Agreement:</h3>
            <p>
            Once all necessary approvals are obtained and filings are made, the company and the appointed Managing Director should execute a formal agreement outlining the terms and conditions of the appointment. This agreement shall be with the resolution passed by the Board and approved by the shareholders.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6:  Compliance with Regulations and Other Formalities:</h3>
            <p>
            Ensure compliance with all applicable regulations and all other formalities, including those related to disclosure of interest, related party transactions, and any other relevant provisions under the Companies Act, 2013.
            No need for Approval of Shareholders, schedule V is not applicable, no need to file e-form MR-1 for private limited Companies.
            </p>
          </div>
          

          
        </div>
       
      </div>
    </div>
  );
};
