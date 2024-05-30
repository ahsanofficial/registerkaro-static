import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/Benefits of the IJCEPA Certificate.svg";

interface HeroProps {
  cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
        <p className="main-para">The following are the benefits of the certification:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Benefits of the IJCEPA Certificate"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>Preferential Market Access: </strong>The IJCEPA certificate grants businesses preferential access to markets, enabling them to benefit from reduced or zero tariffs on eligible goods and services traded between India and Japan. This preferential treatment enhances product competitiveness, lowers costs, and expands market opportunities for businesses on both sides, fostering bilateral trade and strengthening economic ties.</li>
            <li><strong>Tariff Reductions and Eliminations: </strong>Under the IJCEPA, India and Japan have committed to reducing and eliminating tariffs on various goods and services. The IJCEPA certificate allows businesses to capitalize on these tariff reductions, making their products more affordable and competitive in respective markets. This reduction in trade barriers encourages higher trade volumes and benefits businesses involved in bilateral trade.</li>
            <li><strong>Streamlined Customs Procedures: </strong>The IJCEPA certificate simplifies customs procedures by reducing documentation requirements and expediting the clearance process for eligible goods. It minimizes administrative burdens and facilitates smoother customs procedures, saving time and resources for businesses engaged in India-Japan trade. This efficiency in customs clearance enhances the overall trade experience and fosters a conducive trading environment.</li>
            <li><strong>Enhanced Business Opportunities: </strong>The IJCEPA certificate creates new business opportunities for Indian and Japanese companies. It promotes collaboration and partnership across various sectors, including manufacturing, technology, and services. With reduced trade barriers and increased market access, businesses can explore new avenues for growth, expand their customer base, and leverage the expertise and resources of the partner country.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
