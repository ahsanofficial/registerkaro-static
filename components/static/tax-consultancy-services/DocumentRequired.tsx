import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Eligibility for GST Registration.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">The following entities are eligible for GST registration in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
    
        
          <div className="flex-6 pt-5">
            <p><strong>1. </strong>Business entities with an aggregate turnover exceeding Rs 40 lakhs (Rs 20 lakhs for special category states) in a financial year (dealing in goods) and for services, Rs 20 lakhs (and Rs. 10 lakhs for special category states), except for those dealing exclusively in GST-exempt goods/services.</p>
            <p><strong>2. </strong>Entities previously registered under Excise, VAT, Service Tax, etc., need to mandatorily register under GST.</p>
            <p><strong>3. </strong>Entities engaged in inter-state supply of goods irrespective of threshold criteria.</p>
            <p><strong>4. </strong>Casual Taxable Persons and Non-Resident Taxable Persons.</p>
            <p><strong>5. </strong>Taxpayers under the reverse charge mechanism.</p>
            <p><strong>6. </strong>Input Service Distributors (ISD) and their agents.</p>
            <p><strong>7. </strong>E-commerce operators or aggregators and the persons supplying through e-commerce aggregators.</p>
            <p><strong>8. </strong>Entities providing online information or acquiring databases from outside India to a person in India, other than a registered taxable person.</p>
            
        </div>
        <div className="flex-4">
            <Image
              alt="Eligibility for GST Registration"
              className="Importance-img-h-100 w-100"
              height={640}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
