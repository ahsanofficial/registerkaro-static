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
              <div className="ps-5">
                <p>1 : Copy of Memorandum of Association and Article of Association</p>
                <p>2 : Certificate of Incorporation of company</p>
                <p>3 : Registered office address proof</p>
                <p>4 : Email in name of company</p>
                <p>5 : PAN card of company</p>
                <p>6 : TAN card of company</p>
                <p>7 : Company Identification Number</p>
                <p>8 : Information related to previous real estate matter</p>
                <p>9 : Company’s shareholder and director’s details</p>
                <p>10 : Real estate recent project details- sanction plan, layout plan, location details, etc.</p>
              </div>
            </p>
            <p><strong>Individual Promoter or Builder</strong>
              <div className="ps-5">
                <p>1 : Individual Name</p>
                <p>2 : Applicant’s PAN Card</p>
                <p>3 : Father’s name of the applicant</p>
                <p>4 : Occupation of the applicant</p>
                <p>5 : Residential Proof of the applicant</p>
                <p>6 : Income Tax Details of the applicant</p>
                <p>7 : Audited Balance Sheets</p>
                <p>8 : Promoters Official Website</p>
                <p>9 : Income Tax Return</p>
                <p>10 : Previous Project Experience</p>
                <p>11 : Passport size photographs of the applicant</p>
                <p>12 : Email ID of the Builder</p>

              </div>
            </p>
            <p><strong>Real Estate Agent</strong>
            <div className="ps-5">
              <p>1 : State & District of Agent</p>
              <p>2 : Tehsil details of Agent</p>
              <p>3 : Bank details (Punjab National Bank)</p>
              <p>4 : Digital Signature Certificate obtained by the Agent</p>
              <p>5 : Copy of registration fees</p>
              <p>6 : Details of registration</p>
              <p>7 : Name of the Agent</p>
              <p>8 : PAN Card details</p>
              <p>9 : Father’s name of the Agent</p>
              <p>10 : Occupation</p>
              <p>11 : Residence Proof of the Agent</p>
              <p>12 : Income Tax Details</p>
              <p>13 : Audited Balance Sheets</p>

            </div>
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
