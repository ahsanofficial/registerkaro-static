import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhatBest = () => {
  return (
    <div id="WhatBest">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>
              Financial consultants may focus on taxes, insurance, and
              investment situations, as well as budgeting, retirement planning,
              college funds, and refinancing. Deciding on the specific financial
              guidance you wish to offer will impact your next steps. If you
              wish to work with corporate clients, consider relocating to a
              major city, finding mentors, and studying successful corporate
              financial consultants.
            </li>
            <li>
              Although a degree is not required, having one as a financial
              consultant could open up additional opportunities. Obtaining a
              degree offers a structured learning setting for absorbing and
              retaining crucial information that could be useful in your future
              career. This could indicate to potential employers that you
              possess proper education and are enthusiastic about gaining
              knowledge in the field prior to joining it.
            </li>
            <li>
              Financial advisors are frequently asked to show that they are
              capable of offering calculated and beneficial recommendations to
              customers. One way to acquire relevant work experience is by
              looking for companies or firms that provide internship
              opportunities. These internship opportunities may require
              collaboration with experienced mentors and can range in duration
              from a few months to a full year.
            </li>
            <li>
              Demonstrating readiness to start your career by cultivating strong
              client networks and providing valuable advice on financial
              products like mortgages and retirement plans. If you aim to work
              as a self-employed financial consultant, gain experience by
              connecting with individuals who could refer you to potential
              customers and providing your services for no cost or at a
              discounted price.
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="What could be the Best Financial Consultancy Services?"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
