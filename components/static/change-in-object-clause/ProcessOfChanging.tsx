import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/change-in-object-clause/two.svg";
interface HeroProps {
    cityName: string;
}
export const ProcessOfChanging = ({ cityName }: HeroProps) => {
  return (
    <div id="ProcessOfChanging">
      <p className="main-para">There is a formal procedure that needs to be followed for changing the object clause of the company, it cannot be made merely it has a formal procedure and all the steps in this process need to be documented properly </p>
      <div className="ProcessOfChanging flex w-80 m-auto mobile-flex-column">        
        <div className="flex-3">
          <Image
            alt="Process of changing an object clause:"
            className="ProcessOfChanging-img w-100 Importance-img-h-100"
            height={650}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Approval from Board Meeting: </strong>First and foremost, any stakeholder related to the company, when feels that there needs to be approval meaning at least 51% of the people who are stakeholders need to feel the same. Hence, a change in the object clause in the MoA needs to be approved by a majority of the shareholders at least, in the case when there is a change in the object clause that impacts in multiple ways or changes the trajectory of the company entirely it needs to be approved at least 3/4th majority of the shareholders. The decisions that would need a mere more than half majority and the decisions that would need 3/4th majority are clarified in the MoA of the company.</p>
          <p><strong>2. Drafting the amendments: </strong>The amendments that have been decided upon need to be drafted precisely and carefully protecting the interests of the stakeholders, these changes would be reflected in the MoA which acts as the Constitution of the Company.</p>
          <p><strong>3. Filing with the authorities: </strong>The changes need to be made in the official documents of the company, mainly the Mou, and the changed MoU needs to be submitted to the RoC(Registrar of Companies) and be uploaded on the MCA(Ministry of Corporate Affairs) website, in the information section related to the company. There might be some publication requirements depending on the jurisdiction, where the company is registered.</p>
          <p><strong>4. Legal Requirements: </strong>One of the most important factors related to the companies is legal compliance with the process of change, if there is any failure of compliance, the change of the object clause then all the changes may be considered invalid and unenforceable. Hence, while making these changes legal compliance is one of the important factors that companies need to comply with. One needs to be careful and make sure everything complies with the law while making the changes in the object clause of the contract.</p>
        </div>
      </div>
    </div>
  );
};
