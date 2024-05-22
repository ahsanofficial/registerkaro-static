import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
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
                Step 1:  Sending Notice
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
              <div className="ms-1 pe-4">Step 2:  Suit against Infringement</div>
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
              <div className="ms-1 pe-4">Step 3:  First Hearing</div>
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
                alt="four"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 4: Court Fee</div>
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
                alt="five"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 5:  Second Hearing</div>
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
                alt="six"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 6: Final Judgement</div>
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
            <h3>Step 1: Sending Notice</h3>
            <p>
            Before the institution of the suit, the first and foremost step is sending a legal notice to the infringer. This is not a mandatory step, you may prefer directly filing the suit. However, it is always recommended to send a notice first as it might result in an amicable settlement. Which will not only save you your valuable time but also the cost of legal proceedings.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2: Suit against Infringement</h3>
            <p>
            The first step in case of infringement of your trademark is to file a suit by presenting a plaint in the court having appropriate jurisdiction. The plaint must contain all the required particulars and important facts along with the cause of action.
            </p>
           

          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: First Hearing</h3>
            <p>
            On receiving the suit, the judge first observes the suit and issues notice to the opposite party for a second hearing after verifying all the details and documentation.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4:  Court Fee</h3>
            <p>
            The court fee must be submitted before the date of the second hearing. The court fees vary from state to state.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5: Second Hearing</h3>
            <p>
            In the second hearing, both parties contest their case and provide suitable arguments and proof supporting their claims. If the court is satisfied with its arguments, it may release a final judgment or give a date for the next hearing in the court.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Final Judgement</h3>
            <p>
            In the second hearing, both parties contest their case and provide suitable arguments and proof supporting their claims. If the court is satisfied with its arguments, it may release a final judgment or give a date for the next hearing in the court.
            </p>
          </div>
        
     </div>

      
        
       
      </div>
    </div>
  );
};
