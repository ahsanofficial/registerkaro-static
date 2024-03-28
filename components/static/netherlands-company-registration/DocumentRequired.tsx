import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/netherlands-company-registration/Documents.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For registering your company in Netherlands, you will need following documents [list is not exhaustive]: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={720}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Details of Shareholders: Identification Documents, Financial statements, Affidavits declaring no criminal records, etc.</p>
            <p><strong>2: </strong>Details of Partners/members/directors: Identification Documents, Appointment Letters, etc.</p>
            <p><strong>3: </strong>Article of Association [if applicable]</p>
            <p><strong>4: </strong>Memorandum of Association [if applicable]</p>
            <p><strong>5: </strong>Form 6: Non-legal Entity registration</p>
            <p><strong>6: </strong>Form 11: Legal Entity Registration</p>
            <p><strong>7: </strong>Company’s registered address and documents pertaining to the same [utility bills, electricity bill, etc]</p>
            <p><strong>8: </strong>Accountant or Bank Certificate signifying financial health</p>
            <p><strong>9: </strong>Brief about companies’ activities and operations.</p>
            <p><strong>10: </strong>Annual Financial statement of business</p>
        </div>
      </div>
    </div>
  );
};
