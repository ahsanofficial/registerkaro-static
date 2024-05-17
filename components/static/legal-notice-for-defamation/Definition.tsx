import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/legal-notice-for-defamation/onetwo.svg";
interface HeroProps {
    cityName: string;
}
const Definition = ({ cityName }: HeroProps) => {
  return (
    <div id="Definition">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
        <p>A legal defamation notice is a formal communication sent by one party to another party who has allegedly made defamatory statements against a party. It may be sent by an individual and even an organisation. It is generally sent by the aggrieved party against another, whom he alleges of defamation, to inform him of the intent of legal action, and the defamatory actions, and it may contain the damages that the aggrieved party has been claiming. Elements of legal defamation notice may include the identification of parties and the description of the defamatory statements, an explanation of the harm or damage that has been caused, a threat to take legal action, a demand of apology or damages and the notice period.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="What is a Legal Defamation Notice"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Definition;
