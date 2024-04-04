import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <p className="main-para">
        The following are some vital documents required for RERA Registration:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex DcosContainer">
          <div>
            <p>
              <strong>Promoter or Company </strong>
              <ol className="ps-5">
                <li>
                  {" "}
                  Copy of Memorandum of Association and Article of Association
                </li>
                <li> Certificate of Incorporation of company</li>
                <li> Registered office address proof</li>
                <li> Email in name of company</li>
                <li> PAN card of company</li>
                <li> TAN card of company</li>
                <li> Company Identification Number</li>
                <li> Information related to previous real estate matter</li>
                <li> Company’s shareholder and director’s details</li>
                <li>
                  Real estate recent project details- sanction plan, layout
                  plan, location details, etc.
                </li>
              </ol>
            </p>
            <h3>Individual Promoter or Builder</h3>

            <p>1. Applicant’s PAN Card</p>
            <p>2. Individual Name</p>
            <p>3. Father’s name of the applicant</p>
            <p>4. Occupation of the applicant</p>
            <p>5. Residential Proof of the applicant</p>
            <p>6. Income Tax Details of the applicant</p>
            <p>7. Audited Balance Sheets</p>
          </div>
          <div className="line"></div>
          <div>
            <div>
              <p>8. Promoters Official Website</p>
              <p>9. Income Tax Return</p>
              <p>10. Previous Project Experience</p>
              <p>11. Passport size photographs of the applicant</p>
              <p>12. Email ID of the Builder</p>
            </div>
            <p>
              <strong>Real Estate Agent</strong>
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
        </div>
      </div>
    </div>
  );
};
