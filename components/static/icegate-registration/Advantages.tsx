import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Advantages = () => {
  return (
    <div id="Advantages">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="What is a Legal Defamation Notice"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li>Obtain an ICEGATE ID upon registration, facilitating online filing
            of documents.</li> 
            <li>Track jobs filed online through the document tracking
            system.</li> 
            <li>Receive positive or negative acknowledgments, along with SB
            & BE numbers of filed jobs, via email on the registered email ID
            provided during registration.</li> 
            <li>Facilitates payment of Customs duty,
            cess, etc. online.</li> 
            <li>Streamlined customs clearance processes</li> 
            <li>Reduced
            paperwork, faster clearance times, and enhanced transparency and
            compliance with customs regulations.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
