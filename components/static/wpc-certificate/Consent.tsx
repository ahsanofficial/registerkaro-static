import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Consent = () => {
  return (
    <div id="consent">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Prevents hassles during customs clearance: The WPC license serves as evidence of all the device's minute details and frequency test reports. Having a WPC certificate makes customs processing much simpler when importing wireless equipment.   </p>
            <p><strong>2. </strong>Preserving national security: Wireless products often represent a significant risk to our nation's security. As a result, the Wireless Planning and Coordination wing has established strict guidelines for assessing the interior design of wireless devices. </p>
            <p><strong>3. </strong>Preventing frequency insertion: Many products that use unlicensed frequencies have the potential to interfere with other wireless devices' ability to function if a user is careless. ETA certifications are used to eradicate these incursions.</p>
            <p><strong>4. </strong>Guarantees the import of higher-quality gadgets: radio frequency (RF) testing is carried out in a recognized laboratory to ascertain if the apparatus is operational or not.</p>
            <p><strong>5. </strong>Regulatory Compliance: Getting a WPC License guarantees adherence to rules and regulations imposed by the government or regulatory bodies that oversee spectrum management and wireless communication. The WPC License is required in many nations, including India, in order to operate wireless equipment and devices and to guarantee effective and interference-free radio frequency utilization. Maintaining operational continuity, avoiding legal ramifications, and building stakeholder trust all depend on compliance with such regulations.</p>
            <p><strong>6. </strong>Spectrum Management: Effective radio frequency spectrum management and distribution depend heavily on the WPC License. The regulatory authority can guarantee an equitable and optimal allocation of scarce spectrum resources among diverse stakeholders, including telecom operators, broadcasters, and other wireless service providers, by granting licenses for particular frequencies and usage scenarios. WPC licenses enable efficient spectrum management, which reduces interference, improves network dependability, and encourages the expansion of wireless communication infrastructure—all of which eventually benefit wirelessly dependent businesses and consumers.</p>

        </div>
        <div className="flex-3">
          <Image
            alt="How to Apply Certificate or WPC License "
            className=" Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
