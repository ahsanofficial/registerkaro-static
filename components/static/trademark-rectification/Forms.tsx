import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-rectification/Forms_for_Trademark_Rectification.svg";

const Forms = () => {
  return (
    <div id="Forms">
        <p className="main-para">For the Trademark Rectification, you need to be familiar with certain forms that you might need depending on the nature of rectification. These forms are:</p>
        <Image
            alt="Forms for Trademark Rectification"
            className="Forms-img w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        
      <div className="benefits flex w-80 m-auto ">
        <div>
            <p>1. <strong>Form TM-16: </strong>The owner of the Trademark may request correction by submitting the “TM-16” form along with the required payments and fees.</p>
            <p>2. <strong>Form TM-26:</strong> An enraged party must fill out form “TM-26” and send it in with the necessary payments if they want a trademark to be corrected or cancelled.</p>
            <p>3. <strong>Form TM-M: </strong>The proper form to use when the registrar starts rectification is “TM-M,” together with the necessary fees as specified.</p>
        </div>
      </div>
    </div>
  );
};

export default Forms;


