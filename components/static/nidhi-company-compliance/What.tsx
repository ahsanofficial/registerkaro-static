import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const What = () => {
  return (
    <div id="What">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>To start, let us define Nidhi companies. Nidhi companies are mutual benefit societies that were founded mainly to encourage their members to save and practice thrift. These companies give customers a place to deposit their savings, which are subsequently loaned to other customers for their mutual benefit.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="What-img w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default What;


