import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shareholders-agreement/Importance.svg";
interface HeroProps {
    cityName: string;
}
const Importance = ({ cityName }: HeroProps) => {
  return (
    <div id="Importance">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Structural Framework: </strong>A Shareholders’ Agreement serves as a structural framework that outlines the rights and responsibilities of each shareholder within the company. It delineates the roles of major and minority stakeholders, providing a blueprint for efficient decision-making processes.</p>    
            <p><strong>Dispute Resolution: </strong>One of the key features of a Shareholders’ Agreement is its ability to address and mitigate potential disputes among shareholders. By establishing clear mechanisms for conflict resolution, the agreement acts as a preventive measure, fostering a harmonious and collaborative business environment.</p>    
            <p><strong>Protection of Minority Shareholders: </strong>In {cityName}, where diverse ownership structures are common, the protection of minority shareholders becomes paramount. A well-drafted Shareholders’ Agreement includes provisions that safeguard the interests and rights of minority shareholders, ensuring they have a voice in significant corporate decisions.</p>    
            <p><strong>Decision-Making Processes: </strong>The agreement delineates the procedures and criteria for making critical decisions within the company. This includes specifying voting rights, approval thresholds for major transactions, and protocols for electing or removing key executives.</p>    
            <p><strong>Business Operations: </strong>From the allocation of responsibilities to the day-to-day operations of the business, a Shareholders’ Agreement provides a roadmap for how the company will be managed. It addresses matters such as hiring and firing executives, financial management, and strategic planning.</p>    
        </div>
        <div className="flex-3">
        <Image
            alt="Importance of Shareholders’ Agreement"
            className="Importance-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Importance;


