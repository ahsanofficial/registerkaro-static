import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/ayush-license/pre-incorporation.svg";

export const Why = () => {
  return (
    <div id="Why">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
      

        <div className="flex-5 pt-2 ps-5  ">
            <p className="ps-5"> <strong>1. </strong>MoA or AoA</p>
            <p className="ps-5"> <strong>2. </strong>Photo ID Proof</p>
            <p className="ps-5"> <strong>3. </strong>Address Proof</p>
            <p className="ps-5"> <strong>4. </strong>Compliance Affidavit MPD 2021</p>
            <p className="ps-5"> <strong>5. </strong>Appointment Letter</p>
            <p className="ps-5"> <strong>6. </strong>Director’s Biodata</p>
            <p className="ps-5"> <strong>7. </strong>Copy of manufacturing license (if the applicant manufactures AYUSH products).</p>
            <p className="ps-5"> <strong>8. </strong>Plan and layout of the premises showing the installation of Machinery and Equipment.</p>
            <p className="ps-5"> <strong>9. </strong>Attested copies of documents relating to the ownership/ rent/ lease.</p>
            <p className="ps-5"> <strong>10. </strong>Detailed list of Manufacturing and Analytical Equipment as required for formulations applied.</p>
            <p className="ps-5"> <strong>11. </strong>Detail of the technical staff such as name, experience and qualification.</p>
            <p className="ps-5"> <strong>12. </strong>List of equipment to be used for manufacturing.</p>
            <p className="ps-5"> <strong>13. </strong>Water & HVAC system diagram.</p>
            <p className="ps-5"> <strong>14. </strong>KYC details of the applicant.</p>
            <p className="ps-5"> <strong>15. </strong>Constitution document of the business.</p>
            <p className="ps-5"> <strong>16. </strong>Proof of safety & effectiveness as per the rule of 158B of Drugs & Cosmetics Rules, 1945.</p>
            <p className="ps-5"> <strong>17. </strong>Undertaking in case of absence of non-herbal ingredients, applicable in case of herbal products.</p>

        </div>
        <div className="flex-5">
          <Image
            alt="Douments required:"
            className="Importance-img-h-100 w-100"
            height={1050}
            loading="lazy"
            src={dft}
          />
        </div>
        
      </div>
    </div>
  );
};
