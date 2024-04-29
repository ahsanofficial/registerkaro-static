import React from "react";
import bgImage from "../../../assets/images/pvt-reg/bg.png";
import rightArrow from "../../../assets/images/pvt-reg/rightArrow.svg";
import ZohoFormService from "../../child_components/ZohoformService";
import Image from "next/image";
import { GoogleDiv } from "../GoogleDiv";

let hero = {
  pack_includes: [
    "Expert Advisory",
    "Process Consultation",
    "Application drafting",
    "Comprehensive documentation",
    "Guidance provider",
    "Post Registration compliances",
  ],
};

export const Hero = () => {
  return (
    <div className="hero align-center mobile-flex-column">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        className="background-image"
      />
      <div className="header-content">
        <h4 className="mb-4 fs-2">ZED Certification</h4>
        <p>
          Step into Success! Obtain Your ZED Certificate Today! Enhance Your
          Competitive Edge with ZED Certification. Quality Excellence
          Guaranteed. Get Certified Now with RegisterKaro!
        </p>
        <div className="packages">
          {hero.pack_includes?.map((i: any, n: number) => {
            return (
              <div key={n} className="package flex w-80">
                <div>
                  <Image
                    src={rightArrow}
                    alt="rightArrow"
                    className="rightArrow"
                  />
                </div>
                <div>{i}</div>
              </div>
            );
          })}
        </div>
        <GoogleDiv />
      </div>
      <div className="zoho">
        <ZohoFormService service={"zed-certification"} />
      </div>
    </div>
  );
};
