import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/appointment-of-managing-director/List of the documents required for the Appointment of Managing Director.svg";

export const Appointment = () => {
  return (
    <div id="appointment">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-3">
          <Image
            alt=" List of the documents required for the Appointment of Managing Director"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
      
        <div className="flex-7 pt-2">
          <p><strong>1. </strong> Self-attested Identification Proof.</p>
          <p><strong>2. </strong>Residential Proof.</p>
          <p><strong>3. </strong>Passport Size Photograph.</p>
          <p><strong>4. </strong>Digital Signature Certificate (DSC).</p>
          <p><strong>5. </strong>Photocopy of Passport.</p>
          <p><strong>6. </strong>Director Identification Number (DIN).</p>
          <p><strong>7. </strong>PAN Card (for an Indian Citizen/NRI/Foreigner).</p>
          <p><strong>8. </strong>Form DIR-12 Filing.</p>

        </div>
        
      </div>
    </div>
  );
};
