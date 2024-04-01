import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsNeeded = () => {
  return (
    <div id="DocumentsNeeded">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="DocumentsNeeded-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
        <h3>For Basic Registration:</h3>
        <div className="ps-5">
            <ol>
            <li>Submission of Form A, duly signed by FBOs, along with supporting documents.</li>
            <li>Identity proof such as Pan Card, Driving License, Voter ID card, Passport, Aadhaar card, or senior citizen card.</li>
            <li>Two passport size photos of the applicant.</li>
            <li>NOCs from Municipality or Panchayat, Health Department, etc., if applicable.</li>
            <li>Rent Agreement, if applicable.</li>
            </ol>
            </div>
       <h3>For State or Central FSSAI License:</h3>
       <div className="ps-5">
        <ol>

             <li>  Completed and signed Form B.</li>
             <li>   Photo proof and address proof of Proprietor/Partner/Director(s)/Authorized Signatory.</li>
             <li>   Layout plan of the food processing plant.</li>
             <li>   List of Directors with their full address and contact details.</li>
             <li>   ID and address proof of the above persons.</li>
             <li>   List of food categories (for manufacturers).</li>
             <li>   Authority letter nominated by the manufacturer to act on behalf.</li>
             <li>   NOC from the municipality or any other local body.</li>
             <li>   Name and number of equipment as per installed capacity and horsepower for manufacturing and processing units.</li>
             <li>   Partnership deed/affidavit of proprietorship, and, in the case of a company, a copy of MOA and AOA.</li>
             <li>   Specify the source of raw materials for meat and meat processing units and the source of milk and milk-related products, along with the milk collection center where applicable.</li>
             <li>   For the hotel industry, a certificate provided by the Ministry of Tourism.</li>
             <li>   Pesticide residue report of water for the packaging of products like minerals, carbonated beverages, etc.</li>
             <li>   Certificate from the Ministry of Commerce for 100% EOU (in the case of central license).</li>
             <li>   IEC Registration documents issued by DGFT (in the case of Central License).</li>
             <li>   Supporting documents as proof of turnover (in the case of Central License).</li>
             <li>   Analysis report of water to be used in food (in the case of Central License).</li>
             <li>   Possession proof (Electricity bill, sales deed, etc.) in the case of Central License.</li>
             <li>   A cancelled cheque.</li>
                </ol>
               
                </div>
        </div>
     
      </div>
    </div>
  );
};

export default DocumentsNeeded;


