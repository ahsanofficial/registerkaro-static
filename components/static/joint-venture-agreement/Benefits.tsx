import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/oman-company-registration/why_choose_regis.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">A joint venture agreement can be beneficial for various reasons, such as: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-4">
        <Image
            alt="Types of Companies in Oman"
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center pt-5">
            <ul className="fs-5">
              <li>It allows the parties to pool their resources, expertise, and networks to achieve a common goal.</li>
              <li>It enables the parties to access new markets, customers, and opportunities that they may not be able to reach individually.</li>
              <li>It reduces the risks and costs of entering a new venture by sharing them with other parties.</li>
              <li>It provides legal protection and clarity for each party in case of any disputes or issues arising from the joint venture.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
