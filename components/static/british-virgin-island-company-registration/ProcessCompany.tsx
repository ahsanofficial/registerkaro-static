import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";

export const ProcessCompany = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      <p className="main-para">
      You may follow the given step by step procedure for company registration in British Virgin Island:
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
              <div className="ms-1 pe-4">Step 1. Select Business structure and Name: </div>
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
              <div className="ms-1 pe-4">Step 2. Fulfill Prerequisites: </div>
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
              <div className="ms-1 pe-4">Step 3: Documentation: </div>
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
              <div className="ms-1 pe-4">Step 4: Application filing: </div>
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
              <div className="ms-1 pe-4">Step 5: Bank Account: </div>
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
              <div className="ms-1 pe-4">Step 6: Procure Licenses: </div>
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
            <h3>Step 1. Select Business structure and Name: </h3>
            <p>First step is to select a business name and structure for your company as both of these aspects require in depth research and due diligence for the fact that the rest of the factors of your company depend on selection made here. The name must be unique and then further be verified with the BVI Commercial Registry for its availability.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Fulfill Prerequisites: </h3>
            <p>Next step now is to fulfill all the prerequisites for company registration in British Virgin Island which includes obtaining registered office address, appointing registered agent, appointing directors, shareholders, company secretary, etc.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: Documentation: </h3>
            <p>Once all the prerequisites are abided by, now is the time to prepare all the necessary documents for the further process. Documents you need to prepare are listed above. Moreover, make sure that all the documents that require to be notarized are done so. In some aspects, you might have to get your documents translated into English if they are made in another language.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Application filing: </h3>
            <p>after preparing all the documents, now file your application along with all the documents with the BVI Commercial Registry. Once you submit your application, it will be evaluated by the authority and then further be granted status of approval if found no error or objection in the same.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5: Bank Account: </h3>
            <p>Once you have received your company incorporation certificate, you must now open a bank account with the bank established in the British Virgin Island for the purpose of conducting transactions under business operations.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Procure Licenses: </h3>
            <p>To legally launch its operation, the recently created Company must obtain the permission of registration and then formally search for further pertinent permits. These permissions are available from the BVI Financial Services Commission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
