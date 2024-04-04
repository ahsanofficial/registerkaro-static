import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/A_detailed_description_of_the_Power_Banks.svg";
interface HeroProps {
    cityName: string;
}
const Description = ({ cityName }: HeroProps) => {
  return (
    <div id="Description">
        <p className="main-para">Power banks are portable chargers that can recharge electronic devices such as mobile phones, tablets, laptops, etc. when a person is on the move. Power banks have different capacities, sizes, shapes, and features depending on the type and number of batteries, charging ports, cables, indicators, etc. Power banks are classified as information technology equipment under the CRS Order and are subject to BIS CRS Certification.</p>
        <p className="main-para">BIS CRS Certification for Power Banks is a service that involves testing, registration, and compliance of power banks as per the BIS and MeitY norms. The service includes the following steps:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Testing:</strong> You need to send your power bank samples to a BIS recognized lab for testing as per the IS 13252 (Part-1):2010 standard. The lab will conduct various tests such as electrical, mechanical, thermal, fire, and environmental tests to check the safety and performance of your power banks. The lab will issue a test report after completing the testing process.</p>
            <p><strong>Registration: </strong>You need to apply for BIS CRS Registration on the BIS portal by filling the online application form and uploading the required documents such as test report, business license, scope of business license, AIR details, etc. You also need to pay the registration fee as per the BIS fee structure. BIS will verify your application and documents and grant you the BIS CRS Registration number and certificate within 15 working days.</p>
            <p><strong>Compliance: </strong>You need to affix the BIS Standard Mark on your power bank products and packaging as per the BIS guidelines. The BIS Standard Mark consists of the BIS logo, the registration number, and the IS number. You also need to maintain the quality and safety of your power banks as per the BIS standards and comply with the BIS surveillance and inspection requirements. BIS may conduct periodic audits and sample testing to ensure your compliance.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="A detailed description of the Power Banks"
            className="Description-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;


