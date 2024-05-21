import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       
        <div className="flex-3">
          <Image
            alt="Documents you would need"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1 . </strong>Business Incoproation papers from the Registrar of Companies</p>
            <p><strong>2 . </strong>Onwers identity proof- Adhar Card or Pan card</p>
            <p><strong>3 . </strong>Director Identification Number(DIN) and Digital Signature Certificate(DSC)</p>
            <p><strong>4 . </strong>Bank account of the business</p>
            <p><strong>5 . </strong>Proof of registered property for the business</p>
            <p><strong>6 . </strong>Proof of test related to the working of the transfer model, coding test certificate from a software company.</p>
            <p><strong>7 . </strong>Basic business plan of the company</p>

        </div>
      </div>
    </div>
  );
};
