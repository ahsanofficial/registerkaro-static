import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="WhyReg">
      <p className="main-para">The following are the areas of environmental audit</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        
        <div className="flex-7 pt-2">
          <p><strong>Material Audit :</strong> Foreign investors benefit greatly from significant tax breaks because the UAE government seeks to create a business-friendly environment throughout all of its emirates. For example, capital gains and personal taxes are not owed by overseas investors. The VAT rate in Dubai is merely 5%, far less than in the majority of other global economic centers. This thriving region attracts a lot of new businesses and establishes conglomerates thanks to these business-friendly tax regulations.</p>
          <p><strong>IVitality Audit:</strong> This is an extra advantage for start-up businesses trying to grow and attract their first customers. Dubai is home to participants from practically every industry and domain because it is a major worldwide hub for commerce. For both B2B and B2C enterprises, this is a huge benefit. Due to the UAE's rise to the 11th spot on the worldwide "ease of doing business" ranking, more businesses are setting up shop in Dubai. Moreover, the presence of ports and a large labor pool facilitates the expansion of commercial enterprises.</p>
          <p><strong>Water Audit:</strong>A broader range of activities can be managed by mainland businesses. You can trade freely on the mainland if you wish to expand your offerings. Simply re-register your new operation with the Department of Economic Development (DED). As a result, the UAE's 100% ownership policy for international investors would entice them to research the local market in Dubai and adjust the business plan for their operation.</p>
          <p><strong>Human Resources:</strong> The administration of Dubai never declines to provide top-notch facilities, advantages, and security to foreign investors. In terms of quality, innovations, and more commercial opportunities, it keeps changing the laws and regulations that control how enterprises are performed in the town. In addition, the nation hopes to create many commercial growth strategies and host a variety of international events.</p>
          <p><strong>Natural Quality Audit:</strong> Situated at the confluence of the East, West, North, and South, Dubai serves as an easy connection between global manufacturers, distributors, and builders of essential goods. The world's busiest and most active runways are found in Dubai. Runways and cargo terminals are situated in highly connected areas, which facilitates easy operations. This encourages the shipping, re-export, and travel businesses to grow.</p>
          <p><strong>Designing Audit:</strong> Situated at the confluence of the East, West, North, and South, Dubai serves as an easy connection between global manufacturers, distributors, and builders of essential goods. The world's busiest and most active runways are found in Dubai. Runways and cargo terminals are situated in highly connected areas, which facilitates easy operations. This encourages the shipping, re-export, and travel businesses to grow.</p>
          <p><strong>Trash Audit:</strong> Situated at the confluence of the East, West, North, and South, Dubai serves as an easy connection between global manufacturers, distributors, and builders of essential goods. The world's busiest and most active runways are found in Dubai. Runways and cargo terminals are situated in highly connected areas, which facilitates easy operations. This encourages the shipping, re-export, and travel businesses to grow.</p>
          <p><strong>Consistency Audit:</strong> Situated at the confluence of the East, West, North, and South, Dubai serves as an easy connection between global manufacturers, distributors, and builders of essential goods. The world's busiest and most active runways are found in Dubai. Runways and cargo terminals are situated in highly connected areas, which facilitates easy operations. This encourages the shipping, re-export, and travel businesses to grow.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="hy register your company in Dubai?"
            className="Why-img w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
