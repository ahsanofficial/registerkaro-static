import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/icegate-registration/Components of.svg";
interface HeroProps {
    cityName: string;
}
export const WhoCanHave = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoCanHave">
      <p className="main-para">
          Entities Eligible for ICEGATE Registration are as below:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Who can have an ICEGATE Registration?"
            className="Importance-img-h-100 w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center">
          <ol>
            <li>Airlines</li>
            <li>Authorized Terminal Operator (ATO)</li>
            <li>Console Agent</li>
            <li>Customs Broker (CHA)</li>
            <li>Custodian</li>
            <li>E-Seal Vendor</li>
            <li>Participating Government Agencies (PGA)</li>
            <li>Non-IEC Holder/UIN Holder</li>
            <li>Freight Forwarder</li>
            <li>Importer/Exporter</li>
            <li>Non-Vessel Owning Common Carrier (NVOCC)</li>
            <li>Shipping line</li>
            <li>Shipping Agent</li>
            <li>Container Train Operator (CTO)</li>
            <li>Express Cargo Clearance System (ECCS) – (for Courier Services)</li>
            <li>Special Economic Zones (SEZ) Entity</li>
          </ol>
        </div>
      </div>
      <p className="main-para">
      These entities are eligible to have an ICEGATE registration to facilitate their customs-related activities efficiently and effectively.
      </p>
    </div>
  );
};
