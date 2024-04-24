import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benifits = () => {
  return (
    <div id="benifits">
        {/* <p className="main-para">Following is the list of documents [not exhaustive] that you might need for the Company Registration process in Dubai:</p> */}
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Documents you would need"
            className="DocumentRequired-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-7">
            <p><strong>1. </strong>A proper and strucutured tool or statergy to evaluate the companys use of natural resources</p>
            <p><strong>2. </strong>Provides framework for various functioning of the company. </p>
            <p><strong>3. </strong>Gives a positive viewpoint of the company, of their natural usage of their environmental resources.</p>
            <p><strong>4. </strong>Helps the compnaies in giving back to the society by making them aware of the usage of the natural resources for conducting their business.</p>
            <p><strong>5. </strong>Companies get the opportunity to contribute to the U.N sustainability goals</p>
            <p><strong>6. </strong>Creates a good public image of the company, when the audit evaluations are good.</p>
            
        </div>
        
      </div>
    </div>
  );
};
