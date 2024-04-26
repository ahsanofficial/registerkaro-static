import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Importance = () => {
  return (
    <div id="Importance">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5">
           <p><strong>1. Fundraising: </strong>Startups in India often rely on external funding to fuel their growth. A robust financial model is crucial to showcase the business’s potential, attract investors, and negotiate funding rounds.</p>
           <p><strong>2. Decision Making: </strong>Financial models assist founders in evaluating different strategies, scenarios, and potential outcomes, aiding in making informed strategic decisions crucial for the business’s success.</p>
           <p><strong>3. Resource Allocation: </strong>Startups need to optimize their resources efficiently. Financial models help in forecasting cash flows, determining capital needs, and allocating resources effectively.</p>
           
        </div>
        <div className="flex-5">
          <Image
            alt="Importance of starting a Business in Qatar"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};