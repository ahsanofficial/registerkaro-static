import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tea-board-registration/Types of Registration granted by the Tea Board.svg";
interface HeroProps {
    cityName: string;
}
export const TypesOfRegn = ({ cityName }: HeroProps) => {
  return (
    <div id="TypesOfRegn">
      <p className="main-para">The following licences are issuance by the Board:</p>
      
      <div className="TypesOfRegn flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Types of Registration granted by the Tea Board"
            className="TypesOfRegn-img w-100 Importance-img-h-100"
            height={450}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Registration of Manufacturing Unit : </strong>In 2003, an order was issued by the Tea Board notified under The Tea Marketing Control Order that no manufacturer shall carry out the business of Tea Manufacturing without getting registered with the Board. The validity of the Registration of the Manufacturing Unit is for a lifetime. Moreover, before the construction of the unit, NOC for the construction is required.</p>
          <div>
            <p>Documents required for Registration of Manufacturing Unit:</p>
            <ol>
              <li>An Expression of Intent also known as an EoL, needs to be submitted to the Chairman of the Tea Board in the specified format attested with the Name and Signature of the Applicant.</li>
              <li>Submission of Form – A along with the details of the list of pieces of machinery being installed in the factory with the date of information in the specific format.</li>
              <li>A non-judicial declaration stamp paper that specifies the Tea being manufactured is in accordance with the Rules set by FSSAI</li>
              <li>A Copy of the Central Excise Registration Certificate</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>2. Registration as a Buyer : </strong>A person needs to be registered with the Board to purchase tea in bulk, either from auctions or directly from tea estates. The applicant needs to submit an application in Form - C. The validity of the Buyer Registration is for a lifetime.</p>
          <div>
            <p>Documents required for Registration as a Buyer:</p>
            <ol>
              <li>Application duly filled including the date and seal of the appropriate Proprietor or Partner or Director or any other Authorised Personnel</li>
              <li>A Copy of VAT and CST</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
          <p><strong>3. Flavour Registration : </strong>To manufacture and sell tea with infused flavours, a person needs to register with the Tea Board. The tea packaging must contain a label that specifies the flavour and the percentage by which it is infused. The applicant needed to submit the required form according to the notification issued by the Ministry of Health and Family Welfare. The validity of the Flavour Registration is of a lifetime.</p>
          <div>
            <p>Documents required for Flavour Registration:</p>
            <ol>
              <li>Application duly filled including the date and seal of the appropriate Proprietor or Partner or Director or any other Authorised Personnel</li>
              <li>Certification from the FSSAI along with the test report</li>
              <li>Declaration by the Applicant that has been affirmed by the Executive Magistrate that enlists the flavours to contain all-natural flavours and natural flavouring substances that are safe for human consumption</li>
              <li>Any other document, if demanded by the Board</li>
            </ol>
          </div>
        </div>
             
      </div>
    </div>
  );
};
