import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const KeyElements = () => {
  return (
    <div id="KeyElements">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>Parties Involved in Franchise Agreement for intended business</p>
            <p><strong>2. </strong>Sample Clauses from Franchise Agreement</p>
            <p><strong>3. </strong>Getting Help with a Franchise Agreement</p>
            <p><strong>4. </strong>Clauses for Franchise Agreement</p>
        </div>
        
      </div>
    </div>
  );
};

export default KeyElements;


