import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/strike_off_of_comp.svg";

const Strike = () => {
  return (
    <div id="Strike">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Strike off of Companies under Companies Act, 2013"
            className="Strike-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>If you’re Company has been struck off from the Register of Companies on account of Non filing of financial statements and Annual Returns for a Continuous Period of 3 Years. You can now restore your Company by filing a petition in jurisdictional Bench of National Company Law Tribunal (NCLT).</p>
        </div>
       
      </div>
    </div>
  );
};

export default Strike;


