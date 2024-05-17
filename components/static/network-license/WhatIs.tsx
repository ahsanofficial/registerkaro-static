import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/three.svg";

const WhatIs = () => {
  return (
    <div id="WhatIs">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <q>A Network License is a form of floating license enabling usage across any computer within a specific network. It comprises two essential components: a server license file, stationed on the network server, and a client license file, installed on individual computers to gain access to said server</q>
            <p className="pt-4"><strong>Illustration:</strong></p>
            <p>Let us assume the scenario that - In a software development company, there are two distinct user groups for the XYZ software. The first group consists of 15 developers who require intensive usage of the software during project development, often working long hours on specific tasks. They also need the flexibility to access the software remotely when working on client sites. The second group comprises 30 quality assurance testers who use the software sporadically for testing purposes, usually for a few hours per week. They are willing to share licenses and adjust their usage based on availability.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What is a Network License?"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIs;


