import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-in-director/change.svg";

const Meaning = () => {
  return (
    <div id="Meaning">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
         <p>The Change in Director of a Company is possible at any time when required. The change of Directors can be either voluntarily or through demand. The demand arises in case there is a requirement of an expert in the Board or due to death/resignation or death of an existing Director.</p>
         <p>Change in Directors of a Company is an event-based compliance & it should be intimated to the Registrar of Companies within 30 days of passing of the resolution in the Board Meeting. There are some forms that are required to be filed with the RoC declaring Resignation, Appointment & Change in Directors of a Company. If you want help, then contact our team to file forms regarding the Change of Directors or any event-based compliance of a Company.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Change in Director – Meaning "
            className="Meaning-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Meaning;


