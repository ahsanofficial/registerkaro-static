import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/indonesia-company-registration/Benefits_of_Starting_a_Business_in_Indonesia.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">One may start a business in Indonesia for various reasons such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Trade Agreement: </strong>Low or no tax trade is possible between Indonesia and the nations member to ASEAN as Indonesia is a part of it. Companies who want to expand into other Southeast Asian nations might take advantage of cheap taxes by establishing a corporation in Indonesia. You may already reach a population of over 667.3 million people by engaging in trade with ASEAN member nations. Australia and New Zealand, China, India, Japan, and South Korea are all trading partners for Indonesia through ASEAN.</p>
           <p><strong>Tax Benefits: </strong>The Indonesian government has reduced the corporate income tax (CIT) rate from 25% to 22%. There are now 71 double taxation treaties between Indonesia and other countries. </p>
           <p><strong>Special Economic Zone: </strong>Numerous SEZs have been established in Indonesia. These Special Economic Zones (SEZs) provide a range of benefits to business owners, such as tax exemptions, different kinds of subsidies, and advantages for manufacturing. Tax benefits would also be offered, such as reduced corporate income taxes and VAT exclusions.  </p>
           <p><strong>Cheap Labor Cost: </strong>Given that over 40% of its massive population is working age, Indonesia has a sizable labor force. The country's labor costs are reasonable when compared to other countries.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of starting a Business in Indonesia"
            className="Benefits-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
