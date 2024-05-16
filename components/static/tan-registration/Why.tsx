import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-Registration/onetwo.svg";

export const Why = () => {
  return (
    <div id="WhyReg">
      <p className="main-para" style={{ textAlign: "left" }}>The TAN Number, also known as the Tax Deduction and Collection Account Number, is a ten-character alphanumeric number that follows a particular format:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        
        <div className="flex-7 pt-5">
          <p><strong>1. First Four Alphabetic Characters: </strong>The first three characters of the TAN denote the jurisdiction in which it was issued. In contrast, the fourth character represents the first letter of the name of the organization or person requesting the TAN.</p>
          <p><strong>2. Middle Five Characters (Numeric): </strong>The unique numbers in the middle five characters are produced by the system.</p>
          <p><strong>3. Last Character (Alphabetic): </strong>A system-generated, distinct letter serves as the final character.</p>
          
        </div>
        <div className="flex-4">
          <Image
            alt="TAN Number: Meaning and Configuration,TAN Number: Meaning and Configuration"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
