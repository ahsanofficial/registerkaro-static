import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/legal-notice-for-defamation/pre-incorporation.svg";

const CriminalDefamation = () => {
  return (
    <div id="CriminalDefamation">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Criminal Defamation"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
        <p>In criminal defamation, legal notice ingredients would differ as in that of a civil defamation legal notice and a legal notice in criminal defamation serves the purpose of a complaint, and also in the notice must make the other party aware that, the aggrieved party alleges the other party that he made defamatory statements with malice intent, and in the case when the aggrieved party is a public figure then notice may help to establish “actual malice”.</p>
        </div>
      </div>
    </div>
  );
};

export default CriminalDefamation;
