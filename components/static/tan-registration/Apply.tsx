import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Apply = () => {
  return (
    <div id="Apply">
      <p className="main-para">Following is the process to apply for online TAN Registration:
</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=" Process to apply for TAN Registration:"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
      
        <div className="flex-7 pt-2">
          <p><strong>1.</strong> Go to the NSDL official website at TAN apply online.</p>
          <p><strong>2.</strong>Select the 49B form and choose the appropriate category. It could be for an individual, a Company, a Trust, a Government Organization, or any other applicable category and download the form.</p>
          <p><strong>3.</strong> Fill in the TAN application form with accurate information. Provide details such as the applicant’s name, address, contact information, date of birth/incorporation, and other relevant particulars and prepare a DD or challan.</p>
          <p><strong>4.</strong> Verify the form before submitting it and pay required fees on payment window.</p>
          <p><strong>5.</strong> An acknowledgement receipt will appear which consists of a 14 digit number save and sign it for future reference as it is your key to obtain TAN number.</p>
          <p><strong>6.</strong> Mail the acknowledgement receipt to NSDL for future process.</p>
          <p><strong>7.</strong>NSDL will verify the application and process it. Upon successful verification, the TAN will be allotted, and the TAN certificate will be sent to the applicant’s address as mentioned in the application form.</p>

        </div>
        
      </div>
    </div>
  );
};
