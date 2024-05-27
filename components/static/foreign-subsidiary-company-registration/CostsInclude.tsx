import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Costs included in Registering a Subsidiary in India.svg";


export const CostsInclude = () => {
  return (
    <div id="CostsInclude">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>For registering a Subsidiary company, the fee payable to government authorities is approximately Rs. 2000 to 3000 which may vary from state to state. Moreover, the professional fees for registration vary from Rs. 20000 to 50000 which is inclusive of the DSC charges which vary from Rs. 2300 to 23000 depending upon its class.</p>
          <p>Are you planning to start a subsidiary company in India but struggling with the registration process? RegisterKaro can help you expand your business across borders by registering a subsidiary company in India. Don't be left behind due to the fear of complicated registration procedures. RegisterKaro’s expert team consisting of experienced CA, CS and Advocates will help you effectively register your subsidiary company in India. Consult with RegisterKaro, who are having years of experience in all types of company incorporation in India and Abroad. We offer different company registration packages as per your specific requirements.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Costs included in Registering a Subsidiary in India"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
