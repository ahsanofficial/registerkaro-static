import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Remedies = () => {
  return (
    <div id="Remedies">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>In India, trademark Infringement is a cognizable offence i.e. offences where police have the authority to arrest without a warrant. The infringer of a trademark can face both civil and criminal charges which are as follows:</p>
          
            <p><strong>1. </strong>Imprisonment for the minimum period of 6 months which can extend up to 3 years.</p>
            <p><strong>2. </strong>Minimum fine of Rs. 50000 which may extend to Rs. 200000.</p>
           <p>Apart from these serious consequences, the court may also pass the following orders:</p>
            <p><strong>1. Injunction: </strong>The court may by order direct the infringer to do or not to do certain acts either temporarily (temporary injunction) or permanently (permanent injunction).</p>
            <p><strong>2. Compensation: </strong>In cases of trademark infringement, the courts may provide compensation along with the cost of legal proceedings.</p>
            <p><strong>3. Destruction of Goods: </strong>The court may even pass an order for the destruction of goods with infringed trademark.</p>


        </div>
        <div className="flex-4">
          <Image
            alt=" what Remedies are Available Against the Infringer"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
