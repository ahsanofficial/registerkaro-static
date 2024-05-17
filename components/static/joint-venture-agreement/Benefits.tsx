import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/joint-venture-agreement/What are the Benefits.svg";

interface HeroProps {
    cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
        <p className="main-para">A joint venture agreement can be beneficial for various reasons, such as: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="What are the Benefits of Joint Venture?"
            className="Benefits-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center ">
            <ol className="fs-5">
              <li>It allows the parties to pool their resources, expertise, and networks to achieve a common goal.</li>
              <li>It enables the parties to access new markets, customers, and opportunities that they may not be able to reach individually.</li>
              <li>It reduces the risks and costs of entering a new venture by sharing them with other parties.</li>
              <li>It provides legal protection and clarity for each party in case of any disputes or issues arising from the joint venture.</li>
            </ol>
        </div>
      </div>
    </div>
  );
};
