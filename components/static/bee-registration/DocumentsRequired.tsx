import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/bee-registration/Documents required for the BEE Registration.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      

      <div className="documentsRequired flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="DocumentsRequired of BEE Certification"
            className="documentsRequired-img w-100 Importance-img-h-100"
            height={1300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-6">
          <p className="main-para">The following documents are needed for the testing lab:</p>
          <p><strong>1. </strong>Samples with the user manual</p>
          <p><strong>2. </strong>Proof of the manufacturing unit's legal address: a copy of the factory license that lists the relevant product as part of the manufacturing scope and includes the manufacturing unit's address in both English and the original language.</p>
          <p><strong>3. </strong>A copy of the BIS license that includes the validity date and lists all models used.</p>
          <p className="main-para">The following documents are needed for businesses to register under BEE:</p>
          <p><strong>1. </strong>A copy of the online security deposit payment receipt</p>
          <p><strong>2. </strong>A covering letter</p>
          <p><strong>3. </strong>Print out the online application for brand registration</p>
          <p><strong>4. </strong>Copy the registration of the brand or trademark </p>
          <p><strong>5. </strong>If the manufacturing unit is not the owner of the trademark or brand, an authorization letter from the owner is required</p>
          <p><strong>6. </strong>Copy of the MSME Certificate (for Indian OEM only)</p>
          <p><strong>7. </strong>A copy of a valid ISO 9001 certificate that was issued in the name and address of the manufacturing facility listed on the manufacturer's company registration form (if the manufacturing facility has multiple locations, the ISO certificates for each location must be enclosed)</p>
          <p><strong>8. </strong>An authorized signatory letter</p>
          <p><strong>9. </strong>A copy of a BIS license that includes the validity date and all models that have been applied.</p>
          <p className="main-para">The following technical information is needed for model registration according to BEE:</p>
          <p><strong>1. </strong>Covering letter</p>
          <p><strong>2. </strong>Copy of online model registration payment receipt</p>
          <p><strong>3. </strong>Print additional forms from the online application form.</p>
          <p><strong>4. </strong>Sample label</p>
          <p><strong>5. </strong>Original Test report</p>
        </div>
      </div>
    </div>
  );
};
