import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/technology_and_tools.svg";

const Technology = () => {
  return (
    <div id="Technology">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>At the core of virtual offices lies a suite of cutting-edge technologies and tools that facilitate remote collaboration and communication. Cloud-based services, video conferencing platforms, project management tools, and secure virtual private networks (VPNs) are instrumental in connecting dispersed teams. Applications like Slack, Zoom, Microsoft Teams, Google Workspace, and Trello play pivotal roles in enabling real-time interactions, efficient project management, and seamless information sharing among remote workers.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Technology and Tools Driving Virtual Offices"
            className="Technology-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
