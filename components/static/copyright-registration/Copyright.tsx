import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/copyright-registration/eligibility_criteria_for_the_registration.svg";

const Copyright = () => {
  return (
    <div id="Copyright">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>A copyright is a set of legal protections that belong to the creator of an original piece of authorship, such as a song, movie, software, or literary work. These rights cover the ability to distribute copies, create derivative works, reproduce the work, and perform and exhibit it in public. It helps to think of these rights as a bundle of sticks, with each stick standing in for one of these rights in order to comprehend how they can be used or licensed. The owner of the copyright has the option to transmit each “stick” to one or more recipients individually or collectively or to keep them all for themselves.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What is Copyright?"
            className="Copyright-img w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;


