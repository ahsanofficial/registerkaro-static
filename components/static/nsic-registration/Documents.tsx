import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Documents = () => {
  return (
    <div id="Documents">
        <p className="main-para">You need to carry the following documents which are annexed with both the online and offline NSIC registration application:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Certificate of Incorporation [for companies]</p>
            <p><strong>2. </strong>LLP agreement and Form A which is issued by the registrar of Firms [for LLP]</p>
            <p><strong>3. </strong>Memorandum of Association and Articles of association</p>
            <p><strong>4. </strong>Attested documents supporting the ownership</p>
            <p><strong>5. </strong>The director’s statement regarding their lack of affiliation with any large-scale units.</p>
            <p><strong>6. </strong>List of materials like raw material, finished goods, unfurnished goods.</p>
            <p><strong>7. </strong>PAN of company</p>
            <p><strong>8. </strong>Financial documents like bank statements, ITR reports, audited financial statements</p>
            <p><strong>9. </strong>BIS License [if applicable]</p>
            <p><strong>10. </strong>Details pertaining to quality control equipments in Factory</p>
            <p><strong>11. </strong>Human Resource recruitment report</p>
            <p><strong>12. </strong>Utility bills like electricity, water bill, etc.,</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Documents-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;


