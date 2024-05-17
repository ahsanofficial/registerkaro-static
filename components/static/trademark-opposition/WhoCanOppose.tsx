import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-opposition/one.svg";

export const WhoCanOppose = () => {
  return (
    <div id="WhoCanOppose">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Who can oppose the trademark?"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div> 
        <div className="flex-5 pt-5">
            <p>‘Any person’ can object to a trademark under Section 21 of the Trademark Act, regardless of their personal or business interest in the subject matter. A trademark can be contested by a competitor, client, member of the public, or any other individual. Additionally, the party opposing the trademark must be the previous owner of a registered trademark. Following the filing of a trademark opposition, both parties must decide whether to register or abandon the trademark. While protecting the trademark rests with the trademark registrant, anybody who feels that the published mark can cause confusion among the public may file for the opposition.</p>
        </div>
      </div>
    </div>
  );
};
