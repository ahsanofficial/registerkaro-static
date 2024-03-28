import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-your-reistered-office/3.svg";

interface HeroProps {
    cityName: string;
}
const Important = ({ cityName }: HeroProps) => {
  return (
    <div id="Important">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="What is the importance of a registered office address?"
            className="Important-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>The registered office address is crucial for a company in {cityName} as it serves as the official address where all the official communications & legal notices are sent by the Government authorities, regulatory bodies & other stakeholders. Also, it’s the address where the Company keeps its statutory records such as register, books of accounts & other vital documents.</p>
            <p>During Company Incorporation, it is vital to declare the registered office of the Company & to submit the required documents. We will discuss the documents later. The full name and the address on the electricity bill or water bill or property tax receipts should exactly match the NOC (No Objection Certificate) by the landlord & the Rental Agreement. There is no such requirement for the registered office to be an industrial/commercial property. Also, the registered office can’t be vacant land or a building that is under construction. The registered office can also be a residential property. If the Company hasn’t decided the registered office of the Company while filing for Company Incorporation. The Companies Act also provides the option for the Company to declare a temporary address. The registered office should be declared by filing INC-22 within 15 days of Company Incorporation.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Important;


