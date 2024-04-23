import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhoCanOppose = () => {
  return (
    <div id="WhoCanOppose">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p>‘Any person’ can object to a trademark under Section 21 of the Trademark Act, regardless of their personal or business interest in the subject matter. A trademark can be contested by a competitor, client, member of the public, or any other individual. Additionally, the party opposing the trademark must be the previous owner of a registered trademark. Following the filing of a trademark opposition, both parties must decide whether to register or abandon the trademark. While protecting the trademark rests with the trademark registrant, anybody who feels that the published mark can cause confusion among the public may file for the opposition.</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Who can oppose the trademark?"
              className="WhoCanOppose-img w-100 img-h-100"
              height={400}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
