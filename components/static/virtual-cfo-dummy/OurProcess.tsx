import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-cfo-services/process.svg";
interface HeroProps {
    cityName: string;
}
const OurProcess = ({ cityName }: HeroProps) => {
  return (
    <div id="OurProcess">
      <p className="main-para">
        The following is the step-by-step process to get Virtual CFO Services
        from RegisterKaro:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Our Process to get Virtual CFO Services"
            className="OurProcess-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Fill the Form : </strong>
            When you reach out to us for the Virtual CFO services, a form will
            be provided to you from our team which will help us in understanding
            your requirement, needs, budget, vision, and other important
            details. These details will help us in modifying the best solution
            matching your vision and needs.
          </p>

          <p>
            <strong>Expert Consultation : </strong>
            Once the details have been filled, an expert form our team will be
            assigned to you for full time assistance to guide you throughout the
            process. In this entire time, you will be getting consultation from
            our experts at each step.
          </p>

          <p>
            <strong>Submit Documents : </strong>
            The next step is of the information collection in the form of
            documents for the formalities to be completed. Few of your documents
            will be required to proceed ahead with the process.
          </p>

          <p>
            <strong>Track the process : </strong>
            Once all the paper work will be completed, you will be assigned a
            tracking ID which will help you in keeping up with the status of
            your request from the beginning to the end.
          </p>

          <p>
            <strong>Get deliverables : </strong>
            Once the entire process has been done smoothly, you will allotted
            with the respective deliverables which will be included in the
            service package you would be availing.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default OurProcess;
