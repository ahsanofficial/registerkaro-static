import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/outsource-bookkeeping-services/Our_Process_for_Outsource.svg";

const OurProcess = () => {
  return (
    <div id="OurProcess">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Our Process for Outsource Bookkeeping Services"
            className="OurProcess-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Fill the Form: </strong>
            When you reach out to us for the Outsource Bookkeeping services, a
            form will be provided to you from our team, which will help us
            understand your requirements, needs, budget, vision, and other
            important details. These details will help us modify the best
            solution that matches your vision and needs.
          </p>

          <p>
            <strong>Expert Consultation: </strong>
            Once the details have been filled, an expert from our team will be
            assigned to you for full-time assistance to guide you throughout the
            process. In this entire time, you will be getting consultation from
            our experts at each step.
          </p>

          <p>
            <strong>Submit Documents: </strong>
            The next step is the information collection in the form of documents
            for the formalities to be completed. A few of your documents will be
            required to proceed ahead with the process.
          </p>

          <p>
            <strong>Track the process: </strong>
            Once all the paperwork is completed, you will be assigned a tracking
            ID, which will help you keep up with the status of your request from
            the beginning to the end.
          </p>

          <p>
            <strong>Get deliverables: </strong>
            Once the entire process has been done smoothly, you will allotted
            the respective deliverables, which will be included in the service
            package you will be availing.
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default OurProcess;
