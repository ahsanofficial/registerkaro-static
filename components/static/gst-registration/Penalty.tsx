import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-registration/penalities.svg";

const Penalty = () => {
  return (
    <div id="Penalty">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Penalty for Not Getting GST in India"
            className="Penalty-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>If any company or business not paying tax or making short payments (genuine errors) has to pay a penalty of 10% of the tax amount due subject to a minimum of Rs. 10,000. The penalty will be at 100% of the tax amount due when the offender (Company or Business) has deliberately evaded paying taxes.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Penalty;


