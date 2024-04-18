import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/patent-registration/Check_if_you_can_proceed.svg";
interface HeroProps {
    cityName: string;
}

const Check = ({ cityName }: HeroProps) => {
  return (
    <div id="Check">
        <p className="main-para">For being eligible to file for patent registration application, you must fall in one of the following categories:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <ol>
                <li>The real inventor must be the applicant.</li>
                <li>A patentable product, method, or concept needs to be innovative and one-of-a-kind.</li>
                <li>Innovation needs to have a purpose.</li>
                <li>Information about the applicant as well as their KYC.</li>
                <li>every detail of the invention that needs to be patented.</li>
                <li>Any further pertinent papers that may be needed.</li>
            </ol>
        </div>
        <div className="flex-4">
        <Image
            alt="Check if you can proceed with Patent Registration"
            className="Check-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Check;


