import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Checklist = () => {
  return (
    <div id="Checklist">
        <p className="main-para">Following are certain prerequisites to be taken care of while proceeding for the Small Scale Industries Registration:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Ownership Structure: </strong>An entrepreneur who wants to start a self-storage institution (SSI) must first choose the SSI’s ownership structure. The SSI may be founded as a company, partnership, or single proprietorship.</p>
            <p><strong>Targeted Product: </strong>The next step for the entrepreneurs is to determine if the SSI will focus on manufacturing or providing services, what product or product range needs to be produced, and how much of each will be produced.</p>
            <p><strong>Location: </strong> The place where the unit is to be established needs to be chosen. It is necessary to determine the plot’s size, precise location, covered and open areas. The relevant documentation, including the lease agreement, utility bills, ownership paperwork, etc., must be prepared once the place has been decided upon.</p>
            <p><strong>Machinery & Equipment: </strong>It is necessary to choose the machinery and equipment needed for producing the selected goods or rendering services. The most recent technological gear and equipment needs to be purchased and installed in the SSI unit.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Checklist-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Checklist;


