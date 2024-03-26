import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/isi-mark-certification/benefits.svg";


export const Benefits = () => {


  return (
    <div  id="Benefits">
      <p className="main-para mb-2">
        Obtaining ISI Mark Certification in India offers various advantages,
        including:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
          <p className="mb-0">
            <strong> 1: Market Advantages:</strong>
            This certification significantly enhances market benefits compared
            to uncertified products. It facilitates smooth and uninterrupted
            production processes. ISI Certification serves as a testament that
            your products adhere to established standards, ensuring safety.
          </p>
          <p className="mb-0">
            <strong> 2: Market Access:</strong> A certified product gains access
            to a broader market due to its demonstrated higher quality and
            adherence to safety standards, instilling confidence in consumers.
            Products bearing the ISI mark are perceived as more trustworthy,
            providing manufacturers with expanded market access.
          </p>
          <p className="mb-0">
            <strong> 3: Competitive Edge:</strong> ISI certification signifies
            the standard quality of a product, offering manufacturers a
            competitive advantage. Customers tend to prefer certified products,
            reinforcing the manufacturer’s commitment to quality and safety.
          </p>
        </div>
        <div className="flex-4">
        <Image
            alt="Benefits of Obtaining ISI Mark Certification"
            className="Benefits-img w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
       
      </div>
    </div>
  );
};
