import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/two.svg";

interface HeroProps {
    cityName: string;
}
const WhatTrademar = ({ cityName }: HeroProps) => {
  return (
    <div id="WhatTrademar">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
         <p>In {cityName}, a trademark objection arises when the Trademark Registry raises concerns about a trademark application which leads to delaying its registration. The objection is raised when the mark is deemed to potentially infringe upon an existing registered trademark, causing confusion among consumers, or if it violates absolute grounds for refusal given in the Trade Marks Act, 1999. These grounds include lack of distinctiveness, deceptiveness, similarity to prohibited emblems, or immorality. Upon identification of such issues, an Examination Report is issued, detailing the objections. Responses may involve providing arguments, modifying the application, or abandoning it. The Trademark Registry reviews the reply and may accept the application, issue further objections, or schedule a hearing. Overall, the objection process aims to ensure that registered trademarks are genuinely distinctive, safeguarding both businesses and consumers.</p>   
        </div>
        <div className="flex-3">
        <Image
            alt="What is trademark objection?"
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

export default WhatTrademar;


