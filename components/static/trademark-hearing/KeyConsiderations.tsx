import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-hearing/What are the Key Considerations for a Successful Hearing.svg";

interface HeroProps {
  cityName: string;
}

const KeyConsiderations = ({ cityName }: HeroProps) => {
  return (
    <div id="KeyConsiderations">
      <p className="main-para">To increase the favorable possibilities of the decision of the Trademark Registrar parties shall consider the following points for hearing.</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
          <ol>
            <li>
              <strong>Preparation: </strong>Thoroughly gather and organize evidence to support your case, including proof of prior use, trademark distinctiveness, and consumer confusion.
            </li>
            <li>
              <strong>Legal Representation: </strong>Consult experienced trademark attorneys or agents familiar with Indian trademark law to proceed with a complex legal procedure hearing to represent on your behalf.
            </li>
            <li>
              <strong>Compliance: </strong>To avoid delays or adverse rulings ensure strict adherence to procedural requirements and deadlines set by the Trademarks Registry.
            </li>
            <li>
              <strong>Negotiation: </strong> To Avoid protracted legal proceedings explore opportunities for settlement or mediation to resolve disputes amicably.
            </li>
            <li>
              <strong>Review or Appeals: </strong>Look for the possibilities for review or appeal in case of an unfavorable decision, including appeals to the Intellectual Property Appellate Board (IPAB) or higher courts.
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="What are the Key Considerations for a Successful Hearing?"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyConsiderations;
