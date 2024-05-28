import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsdc-registration/one.svg";


export const WhatDo = () => {
  return (
    <div id="WhatDo">
        <p className="main-para">The NSDC strives for skill development, however, it doesn't directly operate in the skill development space but rather facilitates initiatives having potential multiplier effects. It aims to engage the industry in all aspects of skill development, instead of taking on numerous initiatives directly or duplicating existing efforts, NSDC focuses on developing partnerships with various stakeholders to scale up efforts towards the up-skilling of 150 million Indians.</p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="What does NSDC do?"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>NSDC follows these strategies to do so:
                <ol>
                    <li>Developing ultra-low-cost, high-quality, innovative business models.</li>
                    <li>Attracting significant private investment.</li>
                    <li>Ensuring funds primarily circulate as loans or equity rather than grants.</li>
                    <li>Creating leverage for itself and building a robust corpus.</li>
                </ol>
            </li>
            <li>In accordance with these strategies, NSDC undertakes these three key roles:
                <ol>
                    <li><strong>Funding and incentivizing: </strong>This involves providing financial support, such as loans, equity, or grants, to select private sector initiatives. The nature of funding depends on the viability of the segment and the type of player involved. NSDC aims to gradually reduce its grant-making role by fostering strong, viable business models.</li>
                    <li><strong>Enabling support services: </strong>NSDC plays a crucial role in providing support services essential for skills development institutes. This includes setting standards and accreditation systems in partnership with industry associations, ensuring quality curriculum, faculty training, and technology platforms.</li>
                    <li><strong>Shaping/creating: </strong>NSDC actively seeds and promotes large-scale private sector participation in skill development. It identifies critical skill groups, develops skill development models, attracts potential private players, and provides support to these endeavours.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
