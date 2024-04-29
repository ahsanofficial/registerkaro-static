import certificate from "../../../assets/images/static/italy-company-registration/certificate.svg";
import Image from "next/image";

export const Process = () => {
  return (
    <div className="process flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-5">
        <p className="text-justify">
          <p>An essential contract, known as a master service agreement (MSA),
          outlines the relationship scope between two parties, including terms
          and conditions for current and future activities and responsibilities.
          Utilizing MSAs is beneficial, especially for entities with multiple
          agreements for the same client, as they establish basic terms between
          vendors and clients at the start of a business relationship. This
          initial agreement aids in expediting future contract negotiations and
          project management, resulting in a more efficient process. By setting
          basic terms upfront, subsequent contracts can be more easily
          negotiated and agreed upon, saving time and money for all parties
          involved. MSAs are a popular choice for businesses of all kinds due to
          their ability to simplify the contract negotiation process.</p> 
          <p>Crafting an MSA has important considerations, offering benefits for
          organizations and individuals seeking to improve business efficiency.
          MSAs provide consistency in business relationships while allowing
          flexibility to adapt to changing circumstances, especially for
          long-term relationships. The following sections will detail MSA
          construction, usefulness, clauses, potential concerns, and examples of
          MSA language for reference.</p>
        </p>
        <div className="page-point">
          <ul>
            <ul>
              <a href="#Importance" className="scrollTo">
                <li>Why MSA is important</li>
              </a>
              <a href="#ThingsInMSA" className="scrollTo">
                <li>Things to be Present in MSA</li>
              </a>
              <a href="#ProcessStep" className="scrollTo">
                <li>How to Make MSA?</li>
              </a>
              <a href="#WhyChoose" className="scrollTo">
                <li>How RegisterKaro helps you in the Registration process?</li>
              </a>
              <a href="#Faq" className="scrollTo">
                <li>Frequently Asked Questions</li>
              </a>
            </ul>
          </ul>
        </div>
      </div>
      <div className="flex-5">
        <p className="small-heading text-center">
          Company Registration in Italy
        </p>
        <div>
          <Image
            alt="An Overview of Company Registration in Italy"
            className="certificate h-100 w-100"
            loading="lazy"
            src={certificate}
          />
        </div>
      </div>
    </div>
  );
};
