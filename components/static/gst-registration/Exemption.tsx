import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Exemption = () => {
  return (
    <div id="Exemption">
        <p className="main-para">As per Indian Government, the following taxpayers are excluded from GST Registration in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Exemption-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. People making exempt supplies: </strong>Registration of GST in India is not required for those who provide exempt & nil-rated supplies. Unprocessed food, local & overnight train travel, education, healthcare without medications, hotel & lodge stays for less than Rs. 1000 rent, colouring books, and accessories like bindis, bangles & sindoors are among the exempt & NIL rated products & services.</p>
            <p><strong>2. Agriculturists:</strong> People who supply products out from their cultivating land are exempt from GST Registration in India.</p>
            <p><strong>3. People making non-taxable supplies:</strong> Registration of GST is not needed for those who provide non-taxable & non-GST supplies. Natural Gas, Alcohol for Human Consumption, Crude Petroleum, High-Speed Diesel, and Aviation Turbine Fuel are among the products on the list.</p>
            <p><strong>4. People who make supplies under Reverse Charge:</strong> People or individuals who make supplies under reverse charge are excluded from GST Registration.</p>
            <p><strong>5. People below the threshold limit:</strong> It’s not compulsory for companies with an annual turnover of less than Rs. 20 lakhs for GST Registration. The limit is Rs. 10 lakhs in multiple north-eastern states comprising J&K, Uttarakhand, H.P. & many others.</p>
            <p><strong>6. People with activities not considered as service or supply of goods/products:</strong> In India, GST Registration is not required for individuals who provide services to any company or organisation, any court or tribunal, property, auctions, funerals, or those who hold political positions.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Exemption;


