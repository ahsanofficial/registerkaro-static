import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/saudi-arabia-company-registration/Post_registration_Compliances.svg";

const PostRegistration = () => {
  return (
    <div id="PostRegistration">
        <Image
            alt="Post registration Compliances"
            className="PostRegistration-img w-100"
            height={440}
            loading="lazy"
            src={bft}
          />
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-7">
            <p><strong>Tax Registration:</strong> First step after company registration is to get a tax registration number and submit the commercial registration certificate to the General Authority of Zakat and Tax (GAZT) to register.</p>
            <p><strong>Obtain Immigration Card:</strong> For the operational part of business, it is expected if you have employees from different countries or expats. Therefore, for any employee who is working abroad, register with the Ministry of Interior and get an immigration card also known as  Ahkama</p>
            <p><strong>Open Bank Account:</strong> Lastly, to proceed with the operations of the business, you must open a bank account in the kingdom of Saudi Arabia. For opening a bank account you must have a registered office address in Saudi itself.</p>
        </div>
       
      </div>
    </div>
  );
};

export default PostRegistration;


