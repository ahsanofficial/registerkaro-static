import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/csr-registration/one.svg";

interface HeroProps {
  cityName: string;
}

const ProcedureCsr = ({ cityName }: HeroProps) => {
  return (
    <div id="ProcedureCsr">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
          <p>
            <strong>1. </strong>The applicant must go to the Ministry of
            Corporate Affairs (MCA) official website and click on the Forms &
            Downloads tab at the top of the page. Keep scrolling down until you
            find the section on 'Incorporation services'. Select the "Download
            CSR-1 Form for Registration of Entities for CSR Activities" to
            access the e-Form with or without guidelines. This will be available
            for download in zip file format. Unzip the file and extract the
            necessary pdf documents. Access the PDF document titled
            'Form_CSR-1'. This document is Form CSR-1 used to register
            organizations engaging in CSR initiatives.
          </p>

          <p>
            <strong>2. </strong>The candidate must visit the Ministry of
            Corporate Affairs' official website in order to submit Form CSR-1.
            Upon accessing the portal, the applicant has the ability to upload
            the Form CSR-1. Upon logging into the portal, input a valid
            'Corporate identity number' (CIN) to cancel any unused issued shares
            of one class and to increase the share capital. Choose the eForm's
            purpose from the dropdown menu and if 'others' is selected, describe
            the entity in the description box.
          </p>

          <p>
            <strong>3. </strong>If the person signing Form CSR-1 digitally is a
            Director, they must provide an approved DIN. If the person signing
            the Form CSR-1 is the Manager, include an approved DIN or a valid
            income-tax PAN. The membership number must be provided when the
            individual signing Form CSR-1 digitally is the Company Secretary.
          </p>

          <p>
            <strong>4. </strong>The necessary document can be uploaded by
            clicking the attach button, and the fee can be paid by clicking the
            pay button. Upon successful completion and submission of Form CSR-1,
            the eForm will undergo processing by the Registrar of Companies'
            office.
          </p>

          <p>
            <strong>5. </strong>The applicant will receive the SRN after
            successfully submitting Form CSR-1. This SRN will be utilized for
            all future communication with MCA. Upon completion of the submission
            process, a challan will be created showing the Ministry the fees
            paid by the user. This is the confirmation given to the applicant
            that the Form CSR-1 has been submitted.
          </p>

          <p>
            <strong>6. </strong>Once the Form CSR-1 has been fully processed by
            the regulatory body, a confirmation will be sent to the company's
            official email address. Upon submitting Form CSR-1 on the portal,
            the system will automatically create a unique CSR Registration
            Number.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Procedure to File CSR"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcedureCsr;
