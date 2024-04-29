import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Types of AYUSH License"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft} 
          />
        </div>
        <div className="flex-7">
            
           <p><strong>1. AYUSH Manufacturer License:</strong> The business applicant needs a GMP Certified manufacturing facility on industrial land, with a minimum land area of 1200 square feet for making one product. More products require more land. They must have 2 Ayurvedic experts and pharmacists and all necessary machinery installed.</p>
           <p><strong>2. AYUSH Retail & Wholesale License: </strong>In order to get an AYUSH Retail or wholesale license, the shop must be 10 square meters in size and meet the height requirements of the National Building Code, 2005. For both AYUSH Retail and Wholesale license, the shop must be 15 square meters in size and compliant with the National Building Code, 2005.</p>
           <p><strong>3. AYUSH Loan License:</strong> The business lending its manufacturing unit must hold an AYUSH manufacturing license. The unit being lent must be located on industrial land, with separate rooms for raw material storage, finished product storage, and office space. Having pharmacies or Ayurvedic Experts is not necessary for the loan license holder. The license must be renewed periodically.</p>
           <p><strong>4. AYUSH Contract or Third-Party Manufacturing License:</strong> This particular license is acquired when an individual lacks both a license and a manufacturing unit. In this scenario, a third-party manufacturer handles the marketing aspect while the manufacturer takes care of the remaining compliances and liaison work. The third-party manufacturer is not responsible for meeting compliance requirements. The manufacturer's license is used, and approval from authorities is required for all drugs and products. The third-party manufacturer can supply raw materials if desired, otherwise it is the manufacturer's responsibility to procure them. This type of license is also referred to as white-label manufacturing or product-to-product manufacturing.</p>
        </div>
       
      </div>
    </div>
  );
};
