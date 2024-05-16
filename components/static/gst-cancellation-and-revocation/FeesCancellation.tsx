import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const FeesCancellation = () => {
  return (
    <div id="FeesCancellation">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>No fee is required to file GST REG-16 or GST REG-21. However, these forms are required to be filled with utmost care as any error may result in attracting huge penalties therefore taking professional guidance is recommended. Professional fees vary from Rs. 2000 to 6000 per application. With RegistarKaro, you can rest assured that your cancellation or revocation application will be complete in all aspects and will bring you and your business efficacious results. We're committed to providing end-to-end support and ensuring a hassle-free experience for you. Let us help you navigate the GST cancellation or revocation process smoothly so you can focus on running your business with confidence.</p>
        </div>
     
      </div>
    </div>
  );
};

export default FeesCancellation;


