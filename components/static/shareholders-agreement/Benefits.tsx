import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shareholders-agreement/Benefits.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Risk Mitigation: </strong>A Shareholders’ Agreement acts as a risk mitigation tool by addressing potential conflicts and disputes before they escalate. This proactive approach contributes to the overall stability and sustainability of the business.</p>
            <p><strong>Legal Clarity: </strong>Providing a legally binding framework, the agreement offers clarity on the rights, responsibilities, and expectations of each shareholder. This not only minimizes legal uncertainties but also establishes a foundation for the company’s growth.</p>
            <p><strong>Flexibility and Adaptability: </strong>A well-crafted Shareholders’ Agreement is adaptable to the evolving needs of the business. It can be amended or revised to accommodate changes in the company’s structure, ownership, or external business environment.</p>
            <p><strong>Protection of Minority Interests: </strong>For minority shareholders, the agreement serves as a safeguard by clearly outlining their rights and ensuring their interests are protected. This is particularly crucial in diverse ownership structures prevalent in the Indian business landscape.</p>
            <p><strong>Facilitation of Funding and Investment: </strong>Investors and financial institutions often require a clear governance framework before investing in a company. A robust Shareholders’ Agreement enhances the company’s credibility and facilitates external funding.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Benefits of a Shareholders’ Agreement"
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


