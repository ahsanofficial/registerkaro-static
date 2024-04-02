import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-registration/who_can_appy.svg";
interface HeroProps {
    cityName: string;
}
const Who = ({ cityName }: HeroProps) => {
  return (
    <div id="Who">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Who can apply for GST Registration in India?"
            className="Who-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>Businesses or Companies in {cityName} above the threshold limit of Rs. 40 lakhs or Rs. 20 lakhs or Rs. 10 Lakhs as the case may be;</p>
            <p><strong>2. </strong>An individual who supplies through an e-commerce aggregator;</p>
            <p><strong>3. </strong>Every e-commerce aggregator;</p>
            <p><strong>4. </strong>Supplier agents & input service distributor;</p>
            <p><strong>5. </strong>Individuals registered under the Pre-GST Law i.e., VAT, Service Tax, Excise, etc.;</p>
            <p><strong>6. </strong>Those paying tax under the Reverse Charge Mechanism;</p>
            <p><strong>7. </strong>Casual Taxable Person or Non-Resident Taxable Person;</p>
            <p><strong>8. </strong>An individual who supplies through an e-commerce aggregator;</p>
            <p><strong>9. </strong>An individual or a person supplying online information & database access or retrieval services from a place outside {cityName} to an individual in {cityName} other than a registered taxable person.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Who;


