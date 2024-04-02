import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">The following are some vital documents required for RERA Registration:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>Promoter or Company </strong>
              <ol className="ps-5">
                <li> Copy of Memorandum of Association and Article of Association</li>
                <li> Certificate of Incorporation of company</li>
                <li> Registered office address proof</li>
                <li> Email in name of company</li>
                <li> PAN card of company</li>
                <li> TAN card of company</li>
                <li> Company Identification Number</li>
                <li> Information related to previous real estate matter</li>
                <li> Company’s shareholder and director’s details</li>
                <li>Real estate recent project details- sanction plan, layout plan, location details, etc.</li>
              </ol>
            </p>
            <p><strong>Individual Promoter or Builder</strong>
              <ol className="ps-5">
                <li>Individual Name</li>
                <li>Applicant’s PAN Card</li>
                <li>Father’s name of the applicant</li>
                <li>Occupation of the applicant</li>
                <li>Residential Proof of the applicant</li>
                <li>Income Tax Details of the applicant</li>
                <li>Audited Balance Sheets</li>
                <li>Promoters Official Website</li>
                <li>Income Tax Return</li>
                <li>Previous Project Experience</li>
                <li>Passport size photographs of the applicant</li>
                <li>Email ID of the Builder</li>

              </ol>
            </p>
            <p><strong>Real Estate Agent</strong>
            <ol className="ps-5">
              <li>State & District of Agent</li>
              <li>Tehsil details of Agent</li>
              <li>Bank details (Punjab National Bank)</li>
              <li>Digital Signature Certificate obtained by the Agent</li>
              <li>Copy of registration fees</li>
              <li>Details of registration</li>
              <li>Name of the Agent</li>
              <li>PAN Card details</li>
              <li>Father’s name of the Agent</li>
              <li>Occupation</li>
              <li>Residence Proof of the Agent</li>
              <li>Income Tax Details</li>
              <li>Audited Balance Sheets</li>

            </ol>
            </p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
