import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/types-of-companies/renewal.svg";

const Conclusion = () => {
  return (
    <div id="Conclusion">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Conclusion"
            className="Conclusion-img w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>India offers an extensive range of company types that fit different kinds of organizations and goals. There is a proper legal structure for everyone, be it an individual with a philanthropic goal, a major corporation intending to go public, or an entrepreneur trying to establish a small venture. The first step in making wise judgments regarding your business in India is to grasp the subtleties and traits of various company types. Making the correct decision will not only give you the necessary legal structure, but it will also affect how your company runs, raises money, and complies with the law.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Conclusion;


