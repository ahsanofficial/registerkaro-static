import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-search/What_is_the_process_to_conduct_a_Trademark_IP_India_Public_Search.svg";
interface HeroProps {
    cityName: string;
}
const WhatProcess = ({ cityName }: HeroProps) => {
  return (
    <div id="WhatProcess">
        <p className="main-para">There are many ways in which you can conduct a TM Search Online, but we are discussing the most common ways:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7 pt-2">
            <p><strong>1. </strong>Searching for a Trademark Online if you are looking for details for an existing Trademark, conducting an online search is by far your best option;</p>
            <p><strong>2. </strong>The initial step in conducting an online search is to conduct a keyword search on Trademarks/brands that you think might be identical to yours;</p>
            <p><strong>3. </strong>If the name entered doesn’t match anything within your given search parameters, move on to;</p>
            <p><strong>4. </strong>To determine if the name is on file with the Trademark Registry, check the Trademark Registry or conduct an IP {cityName} Public Search;</p>
            <p><strong>5. </strong>Sometimes these databases will provide some insight into whether or not another company has filed for safeguarding their brand name against your use as well;</p>
            <p><strong>6. </strong>If someone else has filed for protection of their brand name against the use of yours, this will be noted in each database record & generally includes links to their respective application.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="What is the process to conduct a Trademark IP India Public Search?"
            className="WhatProcess-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
        
      </div>
    </div>
  );
};

export default WhatProcess;


