import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-search/Different_Types_of_Trademark.svg";

interface HeroProps {
    cityName: string;
}
const DifferentTypes = ({ cityName }: HeroProps) => {
  return (
    <div id="DifferentTypes">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Different Types of Trademark Searches"
            className="DifferentTypes-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>There are two main types of trademark searches:</strong>
          </p>
          <p>
            <strong>1. Knockout Search: </strong> This preliminary search is a
            quick review conducted to identify obvious conflicts with existing
            trademarks. It helps in eliminating clearly conflicting marks early
            in the process, saving time and resources.
          </p>
          <p>
            <strong>2. Comprehensive Search: </strong> A more exhaustive search,
            this involves a thorough examination of multiple databases to
            identify potential conflicting trademarks that might not be
            immediately obvious. It includes searching for phonetic
            similarities, misspellings, translations, and variations of the
            proposed mark.
          </p>
          <p>
            During the trademark search process, several factors are considered:
          </p>
          <p>
            <strong>Similarity of Marks:</strong> Assessing the proposed mark’s
            similarity to existing trademarks in terms of appearance, sound, and
            meaning.
          </p>
          <p>
            <strong>Goods or Services:</strong> Evaluating whether the proposed
            mark is intended for similar goods or services as those covered by
            existing trademarks.
          </p>
          <p>
            <strong>Jurisdiction:</strong> Conducting searches in relevant
            jurisdictions where trademark protection is sought, as trademarks
            are typically limited to specific geographic regions.
          </p>

          <p>Once the search is completed, the results are analyzed to determine the availability of the proposed trademark. If no conflicting trademarks are found, it increases the likelihood of successful registration. However, if similarities are discovered, further evaluation and legal counsel may be necessary to assess the risk of potential conflicts and infringement.</p>
        </div>
     
      </div>
      <p className="main-para">Trademark searches are crucial for businesses to protect their brand identity and avoid legal issues. Registering a trademark that infringes upon existing rights can result in legal disputes, financial liabilities, and the requirement to rebrand, leading to significant costs and loss of market recognition.</p>
    </div>
  );
};

export default DifferentTypes;
