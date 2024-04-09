import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/sweden-company-registration/onetwo.svg"

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Design Your Business Future in Sweden with RegisterKaro"
            className="WhyChoose-img w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>RegisterKaro is dedicated to assisting international investors in successfully registering their companies in Sweden. Our team of corporate specialists ensures a smooth process by handling all legal and administrative details, allowing you to focus on growing your business. With RegisterKaro, you'll have a reliable partner every step of the way, from initial registration to ongoing business support and even post-incorporation. Are you aiming to enter Sweden's thriving technology markets? We're here to assist you in establishing your ideal business in Sweden. Let us guide you through the process and pave the way for your business success in Sweden's dynamic market.Ready to take the next step and register your company in Sweden? Contact RegisterKaro today to get started.</p>
        </div>
          
  
      </div>
    </div>
  );
};
