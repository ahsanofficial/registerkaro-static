import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Small = () => {
  return (
    <div id="Small">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Ancillary Industries: </strong>Ancillary industries produce parts for other producers. The finished item is then put together by these producers. Large corporations produce final things, but they don’t always produce every component in-house. These large companies’ vendors come from peripheral sectors.</p>
            <p><strong>Village Industries: </strong>When an SSI is founded in a rural region and does not belong to the organized sector, it is referred to as a village industry. Usually, the only labor used in these businesses is human labor.</p>
            <p><strong>Manufacturing Industries: </strong>The manufacturing sectors produce completed commodities that are either consumed or utilized for additional processing. Food processing facilities, power looms, engineering facilities, etc. are a few instances of these SSIs.</p>
            <p><strong>Service Industries: </strong>Industries that rely on services don’t produce any form of goods. They offer post-purchase services such as product maintenance, repair, and upkeep.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Small-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Small;


