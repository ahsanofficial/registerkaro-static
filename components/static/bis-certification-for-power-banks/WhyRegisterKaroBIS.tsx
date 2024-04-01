import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyRegisterKaroBIS = () => {
  return (
    <div id="WhyRegisterKaroBIS">
        <p className="main-para">At RegisterKaro, we offer a range of BIS CRS certification services to help you with the online submission and monitoring of your proposals.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong> 1: </strong>Our package covers everything you require for BIS CRS Certification in India;</p>
            <p><strong> 2: </strong>Our experts are up-to-date with the latest laws and have helped many businesses in India;</p>
            <p><strong> 3: </strong>You will have your BIS CRS Certification in minimal time;</p>
            <p><strong> 4: </strong>Our support team is available to answer all the questions you may have regarding the procedure for BIS CRS Certification.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="WhyRegisterKaroBIS-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyRegisterKaroBIS;


