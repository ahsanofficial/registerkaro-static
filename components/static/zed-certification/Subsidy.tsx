import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/zed-certification/onetwo.svg";

const Subsidy = () => {
  return (
    <div id="Subsidy">
      <p className="main-para">Under this Scheme, any number of Units registered under a single Udyam Registration may apply for a subsidy. To get a subsidy, benefits, or incentives, each Unit (under one Udyam Registration) must apply for certification separately.</p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Subsidy on cost of certification"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li>MSMEs will receive financial support in the form of subsidies to help them achieve ZED Certification Level.</li>
            <li>A MSME unit will receive a certification cost discount based on the following structure:
              <ol>
                <li><strong>Micro Enterprises: </strong>80%</li>
                <li><strong>Small Enterprises: </strong>60%</li>
                <li><strong>Medium Enterprises: </strong>50%</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Subsidy;
