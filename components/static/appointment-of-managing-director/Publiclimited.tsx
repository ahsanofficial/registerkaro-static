import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import seven from "../../../assets/images/pvt-reg/HowToRegister/seven.svg";
import eight from "../../../assets/images/pvt-reg/HowToRegister/eight.svg";
import nine from "../../../assets/images/pvt-reg/HowToRegister/nine.svg";
import ten from "../../../assets/images/pvt-reg/HowToRegister/ten.svg";
import eleven from "../../../assets/images/pvt-reg/HowToRegister/eleven.svg";

import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import { text } from "stream/consumers";
import { AlignLeft } from "phosphor-react";

export const Publiclimited = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="Publiclimited">
     
      
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      



        <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>Step 1.Authorization by Articles of Association (AOA):</h3>
            <p>
            The AOA contains provisions regarding the appointment, powers, and terms of office of the Managing Director. The company must authorize the appointment of a Managing Director.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2.Board Resolution:</h3>
            <p>
            The Board of Directors schedules a meeting to propose the appointment of a Managing Director and a resolution shall be passed by the Board recommending the appointment.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3> Step 3. Notice of Board Meeting:</h3>
            <p>
            A notice of the Board meeting, along with the agenda, is sent to all directors of the company, as per the provisions of the Companies Act, 2013.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4.  Board Meeting:</h3>
            <p>
            The Board meeting is convened, and the resolution for the appointment of the Managing Director is discussed. The resolution must be passed by a simple majority of directors present and voting.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5. Special Resolution (if required):</h3>
            <p>
            If the AOA requires, or if the Board decides, a special resolution may be passed by the shareholders of the company at a general meeting. This is usually the case for larger public companies.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6. Appointment Letter:</h3>
            <p>
            Upon the passing of the resolution, the Board issues an appointment letter to the selected candidate containing the terms and conditions of the appointment, including remuneration, tenure, responsibilities, and other relevant details.
            </p>
          </div>
          <div className={`${active === "7" ? "active" : "none"}`}>
            <h3>Step 7. Filing with Registrar of Companies (ROC):</h3>
            <p>
            Within 30 days of the appointment, the company must file the appointment letter, board resolution, and any other required forms with the ROC, including as per the Companies Act, 2013.
            </p>
          </div>
          <div className={`${active === "8" ? "active" : "none"}`}>
            <h3>Step 8. Disclosure in Directors' Report:</h3>
            <p>
            The appointment of the Managing Director is disclosed in the Directors' Report of the company, which is a part of the Annual Report submitted to the shareholders.
            </p>
          </div>
          <div className={`${active === "9" ? "active" : "none"}`}>
            <h3>Step 9. Compliance with SEBI Regulations (if applicable):</h3>
            <p>
            The appointment of key managerial personnel, including the Managing Director, is required if the company is listed on a stock exchange, in compliance with additional regulations of the Securities and Exchange Board of India (SEBI).
            </p>
          </div>
          <div className={`${active === "10" ? "active" : "none"}`}>
            <h3> Step 10. Intimation to Stock Exchange (if applicable):</h3>
            <p>
            If the company is listed, the appointment of the Managing Director must be intimated to the stock exchange where the company's securities are listed, by the Listing Agreement or regulations.
            
            </p>
          </div>
          <div className={`${active === "11" ? "active" : "none"}`}>
            <h3>Step 11. Statutory Compliance:</h3>
            <p>
            Ensure compliance with other applicable laws, regulations, and guidelines relating to the appointment of Managing Director, such as those issued by the Ministry of Corporate Affairs and other regulatory authorities.
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
                Step 1:Authorization by Articles of Association (AOA)
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
              <div className="ms-1 pe-4"> step 2:Board Resolution</div>
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
              <div className="ms-1 pe-4">Step 3: Notice of Board Meeting</div>
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
              <div className="ms-1 pe-4">Step 4: Board Meeting</div>
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
              <div className="ms-1 pe-4">Step 5: Special Resolution (if required)</div>
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
              Step 6: Appointment Letter
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
              Step 7: Filing with Registrar of Companies (ROC)
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
            onClick={() => handleActive("8")}
            className={`btn flex ${
              active === "8" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={eight}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              Step 8: Disclosure in Directors' Report
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
            onClick={() => handleActive("9")}
            className={`btn flex ${
              active === "9" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={nine}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              Step 9: Compliance with SEBI Regulations (if applicable)
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
            onClick={() => handleActive("10")}
            className={`btn flex ${
              active === "10" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={ten}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              Step 10: Intimation to Stock Exchange (if applicable)
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
            onClick={() => handleActive("11")}
            className={`btn flex ${
              active === "11" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={eleven}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
              Step 11: Statutory Compliance
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
       
      </div>
    </div>
  );
};
