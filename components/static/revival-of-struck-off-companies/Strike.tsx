import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Strike = () => {
  return (
    <div id="Strike">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>If you’re Company has been struck off from the Register of Companies on account of Non filing of financial statements and Annual Returns for a Continuous Period of 3 Years. You can now restore your Company by filing a petition in jurisdictional Bench of National Company Law Tribunal (NCLT).</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Strike-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Strike;


