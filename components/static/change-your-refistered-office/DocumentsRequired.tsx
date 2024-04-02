import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-your-reistered-office/Documents.svg";

interface HeroProps {
    cityName: string;
}
const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">It is necessary to intimate the ROC regarding to change your registered office address of the Company during Company Incorporation. Ensure to submit the following documents required for change in registered office address:</p>
        <div className="flex-3">
        <Image
            alt="Documents Required to Change your Registered Office Address"
            className="DocumentsRequired-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
        <div className="flex-7">
            <p><strong>1. </strong>Electricity bill or gas bill;</p>
            <p><strong>2. </strong>Possession tax receipt;</p>
            <p><strong>3. </strong>NOC (No Objection Certificate) collected from the owner of the registered office;</p>
            <p><strong>4. </strong>Lease treaty between the firm & the owner.</p>
        </div>
      
      </div>
      <p className="main-para">Ensure that the name & address you have provided in the above documents should be the same as the NOC receipt given by the property owner & it is cited in the Rental Agreement/Treaty. Moreover, a facility or premise under construction can’t be appointed as a position for a registered office of a Company. Though, it’s not expected to proclaim a registered office as an industrial or retail commodity, a residential commodity can also be proclaimed as a registered office of a firm.</p>
    </div>
  );
};

export default DocumentsRequired;


