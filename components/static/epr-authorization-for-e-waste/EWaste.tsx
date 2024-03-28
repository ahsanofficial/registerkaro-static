import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/E-waste_Management_Rules.svg";
interface HeroProps {
    cityName: string;
}
const EWaste = ({ cityName }: HeroProps) => {
  return (
    <div id="EWaste">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="E-waste Management Rules 2022"
            className="EWaste-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>The E-Waste Rules were initially established in 2011 in {cityName} and were put into effect in 2012. Originally applicable to manufacturers, a revised version of the rules was introduced in 2016, broadening their reach to encompass bulk consumers, refurbishers, recyclers, and dismantlers. This amendment also bolstered the provisions of the E-Waste Management Rules, 2022, particularly focusing on Extended Producer Responsibility (EPR), alongside several other significant updates related to registration, authorization, and the implementation process. The E-Waste Management Rules 2022, issued by the Ministry of Environment, Forests, and Climate Change on November 2, 2022, will become effective on April 1, 2023. Under these rules, all entities, including manufacturers, refurbishers and recyclers, are required to register on the designated portal. They will be responsible for collecting e-waste generated during the manufacturing, refurbishment, or disposal of electrical and electronic equipment, ensuring its proper recycling or disposal. Each entity should register under the appropriate category, such as manufacturer, producer, refurbisher, or recycler. If an entity falls into multiple categories, separate registration is mandatory. Operating without registration is considered illegal. All entities must submit annual and quarterly returns in the prescribed format through the portal by the end of the subsequent month following the quarter or year to which the return pertains. These regulations include all individuals involved in the manufacture, sale, transfer, purchase, refurbishment, recycling, dismantling and processing of e-waste or electrical equipment as listed in Schedule I.</p>
            <p>The Central pollution Control Board has the authority to impose registration and annual maintenance fees on entities seeking registration based on their e-waste handling capacity, as determined by the Central Pollution Control Board with approval from the Steering Committee.</p>
            <p>Manufacturers of electrical and electronic equipment listed in Schedule I must initially register on the portal to establish and fulfil extended producer responsibility targets according to Schedules III and IV.</p>
            <p>Manufacturers with extended producer responsibility plans established under the previous E-Waste Management Rules of 2016 are required to migrate under these rules following the procedure outlined by the Central Pollution Control Board with approval from the Steering Committee.</p>
        </div>
       
      </div>
    </div>
  );
};

export default EWaste;


