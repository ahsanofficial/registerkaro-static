import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/normal-images/onetwo.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt=" Section 96 of the Companies Act "
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>  Appointment Restrictions:</strong><br/></p> 
            <p><strong>1. </strong>A company cannot simultaneously appoint or employ both a managing director and a manager.</p>
            <p><strong>2. </strong>The tenure of appointment for a managing director, whole-time director, or manager cannot exceed five years at a time.</p>
            <p><strong>3. </strong>Re-appointment is prohibited within one year before the expiry of the current term.</p>
            <p><strong>4. </strong>Certain disqualifications apply to individuals eligible for these roles, including age limits (21 to 70 years), insolvency status, suspension of payments to creditors, or past convictions exceeding six months.</p>

           <p><strong> Approval and Process:</strong><br/></p> 
            <p><strong>1. </strong>Appointment, terms, and conditions, along with remuneration, must be approved by the Board of Directors at a meeting.</p>
            <p><strong>2. </strong>This approval is subject to ratification by a resolution at the subsequent general meeting of the company and by the Central Government if the appointment deviates from specified conditions.</p>
            <p><strong>3. </strong>The notice convening the meeting must include details of the appointment terms, remuneration, and any director's interests in such appointments.</p>
            <p><strong>4. </strong>A prescribed form return must be filed with the Registrar within sixty days of the appointment.</p>

            <p><strong> Validity of Acts:</strong><br/></p> 
            <p><strong>1. </strong>If an appointment is not approved by the company at a general meeting, acts performed by the appointee before such approval are not deemed invalid.</p>
        </div>
       
      </div>
    </div>
  );
};
