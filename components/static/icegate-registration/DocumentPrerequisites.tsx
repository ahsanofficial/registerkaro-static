import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/icegate-registration/documents.svg";
interface HeroProps {
    cityName: string;
}
const DocumentPrerequisites = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentPrerequisites">
      <p className="main-para">
        Here are the pre-requisites for user registration on ICEGATE:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>
            <strong>1. </strong>Registered Email ID with GSTN (and DGFT for
            Importers/Exporters)
          </p>
          <p>
            <strong>2. </strong>Registered Mobile Number with GSTN (and DGFT for
            Importers/Exporters)
          </p>
          <p>
            <strong>3. </strong>Key documents/information required for
            registration
          </p>
          <p>
            <strong>4. </strong>Self-attested soft copy of commercial license
            (e.g., IE Code, Shipping Line License, CHA license, etc.)
          </p>
          <p>
            <strong>5. </strong>Details of the authorized representative (Parent
            user)
          </p>
          <p>
            <strong>6. </strong>Valid PAN
          </p>
          <p>
            <strong>7. </strong>Aadhaar linked with Digi-locker
          </p>
          <p>
            <strong>8. </strong>Digital Signature Certificate (DSC)
          </p>
          <p>
            <strong>9. </strong>Self-attested soft copy of Authorization Letter
            issued by the organization for conducting business on ICEGATE (as
            per Annexure – B of the manual)
          </p>
          <p>
            <strong>10. </strong>The name entered in the registration form must
            match the name in PAN records.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="List of documents and Pre-requisites for user registration on ICEGATE"
            className="Importance-img-h-100 w-100"
            height={620}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentPrerequisites;
