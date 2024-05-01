import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/founders-agreement/Why choose Register.svg";

const WhyChooseReg = () => {
  return (
    <div id="WhyChooseReg">
      <p className="main-para">
      Registerkaro is the best choice for Founders’ Agreement service because:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Why choose Registerkaro for Founders’ Agreement service?"
            className="WhyChooseReg-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-3">
          <ol className="fs-5">
            <li>
            We offer a fast and hassle-free service that saves you time and money.
            </li>
            <li>
            We have a team of expert and qualified lawyers who can draft and register your Founders’ Agreement as per the latest laws and regulations.
            </li>
            <li>
            We provide a customized and comprehensive Founders’ Agreement that covers all the essential aspects of your business and co-founders relationship.
            </li>
            <li>
            We provide round-the-clock support and guidance to answer any queries or doubts you may have regarding the Founders’ Agreement process.
            </li>
            <li>
            We have a 100% customer satisfaction rate and a loyal client base of more than 5000 businesses.
            </li>
          </ol>
        </div>
      </div>
      <p className="main-para">So, what are you waiting for? Contact us today and get your Founders’ Agreement done with Registerkaro. We are here to help you start and grow your business with confidence and peace of mind.</p>
    </div>
  );
};

export default WhyChooseReg;
