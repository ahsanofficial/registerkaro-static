import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/financial-modeling-for-startups/Important_Points_to.svg"

export const ImportantPoint = () => {
  return (
    <div id="ImportantPoint">
      <p className="main-para">Following are some important point that should be kept in mind while creating a good financial model for startups in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
        <h3>Define the Purpose:</h3>
          <p className="ps-5">Identify the primary problem your business aims to solve with the financial model.</p>
          <p className="ps-5">Clearly outline the goals you intend to achieve.</p>
        <h3>Simplify Variables:</h3>
          <p className="ps-5">Limit the number of variables and metrics to essential elements.</p>
          <p className="ps-5">Focus on key factors that drive your business’s financial health.</p>
        <h3>Structured Excel Sheet:</h3>
          <p className="ps-5">Organize your financial model in a well-structured Excel sheet.</p>
          <p className="ps-5">Use distinct colors for formulas and metrics to enhance clarity.</p>
        <h3>Simple Formulas:</h3>
          <p className="ps-5">Opt for straightforward calculations to maintain simplicity.</p>
          <p className="ps-5">Break down complex formulas for better understanding.</p>
        <h3>Formula Double-check:</h3>
          <p className="ps-5">Regularly review and recheck formulas to prevent inaccuracies.</p>
          <p className="ps-5">Consider having another person review the financial model for validation.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Important Points to Make a Financial Model"
            className="Importance-img-h-100 w-100"
            height={680}
            loading="lazy"
            src={dft}
          />
        </div>
          
       
      </div>
    </div>
  );
};
