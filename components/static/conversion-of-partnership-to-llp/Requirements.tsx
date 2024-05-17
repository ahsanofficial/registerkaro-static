import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/Requirements_for_Conversion_of_Partnership_into_LLP.svg";

interface HeroProps {
  cityName: string;
}

const Requirements = ({ cityName }: HeroProps) => {
  return (
    <div id="Requirements">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Requirements for Conversion of Partnership into LLP"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Drafting an LLP Agreement: </strong>Partners need to draft an LLP agreement outlining the rights, duties, and obligations of partners.</p>
            <p><strong>Obtaining Partner Approval: </strong>Partner approval is essential for the conversion process.</p>
            <p><strong>Filing Conversion Forms: </strong>Submission of conversion forms with the Registrar of Companies is mandatory.</p>
            <p><strong>Transferring Business Assets: </strong>Transfer of business assets from the partnership to the LLP.</p>
            <p><strong>Compliance with Regulatory Bodies: </strong>Ensuring compliance with legal and regulatory requirements post-conversion.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Requirements;


