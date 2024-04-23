import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhyChoose2 = () => {
  return (
    <div id="Whychoose2">
      <p className="main-para">Registerkaro is the best choice for Founders’ Agreement service because:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Why Choose RegisterKaro for Company Registration in Dubai?"
            className="WhyChoose-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1 :</strong>We offer a fast and hassle-free service that saves you time and money.</p>
            <p><strong>2 :</strong>We have a team of expert and qualified lawyers who can draft and register your Founders’ Agreement as per the latest laws and regulations.</p>
            <p><strong>3 :</strong> We provide a customized and comprehensive Founders’ Agreement that covers all the essential aspects of your business and co-founders relationship</p>
            <p><strong>4 :</strong> We provide round-the-clock support and guidance to answer any queries or doubts you may have regarding the Founders’ Agreement process</p>
            <p><strong>5 :</strong> We have a 100% customer satisfaction rate and a loyal client base of more than 5000 businesses</p>
            <p>So, what are you waiting for? Contact us today and get your Founders’ Agreement done with Registerkaro. We are here to help you start and grow your business with confidence and peace of mind.</p>
        </div>
       
        
      </div>
    </div>
  );
};
