import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Eligibility = () => {
  return (
    <div id="Eligibility">
        <p className="main-para">The requirements under which a business qualifies as a small business have been laid out by the Indian government. The MSMED Act, 2006 states that the Finance Ministry’s amended regime, effective July 2020, establishes the following limits for the small scale industries in </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Eligibility-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <h3>Manufacturing Industry :</h3>
            <ol className="ps-5">
                <li>For Micro Level Industry, capital investment of less than Rs. 25 Lakh in plant and machinery equipment</li>
                <li>For Small Level Industry, capital investment of more than Rs. 25 Lakh but less than Rs 5 Crore in plant and machinery equipment.</li>
                <li>For Medium Level Industry, capital investment of more than Rs. 5 Crore but less than Rs 10 Crore in plant and machinery equipment.</li>
            </ol>
            <h3>Service Industry : </h3>
            <ol className="ps-5">
                <li>For Micro Level Industry, capital investment of less than Rs. 10 Lakh in equipment</li>
                <li>For Small Level Industry, capital investment of more than Rs. 10 Lakh but less than Rs 2 Crore in equipment.</li>
                <li>For Medium Level Industry, capital investment of more than Rs. 2 Crore but less than Rs 5 Crore in equipment.</li>
            </ol>
            
        </div>
       
      </div>
    </div>
  );
};

export default Eligibility;


