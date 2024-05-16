import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyDo = () => {
  return (
    <div id="WhyDo">
        <p className="main-para">Following are the reasons one needs a pitch deck, and why is it important</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>With the extremely short attention spans of today's generation, no investor or any person approached for partnership has the time to go into detail about the company, hence a pitch deck is a short attractive pitch deck that gives an idea about the start-up they are investing in into and partnering with.</p>
            <p><strong>2. </strong>This allows communication of the business plan related to the business to the investors as well as to anyone the start-up is seeking to partner with.</p>
            <p><strong>3. </strong>Creating an attractive pitch deck as well as educating investors regarding the business increases drastically the chances of securing funding for the start-up.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyDo;


