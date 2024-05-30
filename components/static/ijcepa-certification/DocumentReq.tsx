import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/Documents and Information Required for IJCEPA Certificate.svg";

interface HeroProps {
  cityName: string;
}

export const DocumentReq = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentReq">
        <p className="main-para">When applying for an IJCEPA Certificate, you'll need the following documents:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
          <ol>
            <li>DGFT login id</li>
            <li><strong>Exporter and Importer Details: </strong>This includes their name, address, country and other details.</li>
            <li><strong>Port Information: </strong>Specify the loading port, transit port, and discharging port.</li>
            <li><strong>Transportation Details: </strong>Include the name of the vessel or flight number and the date of shipment (bill of lading or airway bill date).</li>
            <li><strong>Goods Description: </strong>Provide item number, marks & numbers, number and type of packages, tariff classification number (HS 2007), and description of each item.</li>
            <li><strong>Tariff Classification: </strong>Specify the HS tariff classification number in a six-digit level.</li>
            <li><strong>Preference Criteria: </strong>Indicate the preference criterion of the goods.</li>
            <li><strong>Quantity: </strong>State the quantity of goods being exported.</li>
            <li><strong>Invoice Details: </strong>Include the invoice number and date for each item, and mention third-country invoicing if applicable.</li>
            <li><strong>Digital Signature: </strong>Attach a Digital Signature Certificate (DSC).</li>
            <li><strong>Import-Export Code: </strong>Provide the Import-Export Code (IEC).</li>
            <li><strong>Manufacturer Exporter Declaration: </strong>Include a declaration on the company's letterhead.</li>
            <li><strong>Product Description: </strong>Provide a detailed description of the products being exported.</li>
            <li><strong>Purchase Order: </strong>Attach the purchase order from the importer.</li>
            <li><strong>Declaration: </strong>Include any additional declarations required for the application.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Documents and Information Required for IJCEPA Certificate"
            className="Importance-img-h-100 w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
