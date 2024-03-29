import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg"

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For processing with the company registration process in New Zealand, you would need following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-7 pt-5">
            <p><strong>1: </strong>Details of Shareholders: Identification Documents, Financial statements, Affidavits declaring no criminal records, etc.</p>
            <p><strong>2: </strong>Details of Partners/members/directors: Identification Documents, Appointment Letters, etc.</p>
            <p><strong>3: </strong>Company Constitution [charter, Article of Association, Memorandum of Association]</p>
            <p><strong>4: </strong>Board Resolution for establishment of business along with minutes of the meeting</p>
            <p><strong>5: </strong>Company registration forms</p>
            <p><strong>6: </strong>Company’s registered address and documents pertaining to the same [utility bills, electricity bill, etc]</p>
            <p><strong>7: </strong>Brief about companies’ activities and operations.</p>
        </div>
      </div>
    </div>
  );
};
