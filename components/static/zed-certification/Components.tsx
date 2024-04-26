import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Components = () => {
  return (
    <div id="Components">
      <p className="main-para">These are the following components of ZED Certification</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>Industry Awareness Programs/Workshops: </strong>With the support of stakeholders such as Industry Associations, Implementing Agencies, MSME-DIs, District Industries Centers (DICs), Large Enterprises/OEMs, and BEE, MSMEs will be made aware of the MSME Sustainable (ZED) Certification through nationwide awareness programs (online and/or in-person, as appropriate).</li>
            <li><strong>Training Programs: </strong>In order to facilitate an efficient implementation by partners including QCI, BIS, and NPC, stakeholders such as MSME Officers, Assessors, and Consultants will get training on the MSME Sustainable (ZED) Certification.</li>
            <li><strong>Evaluation and Certification: </strong>MSMEs will be evaluated (via desktop verification, remote assessment, or on-site assessment, if appropriate) and granted the appropriate Certification Level for which they have sought, provided they meet the Level's standards.</li>
            <li><strong>Handholding: </strong>MSMEs will receive assistance in obtaining higher ZED Certification levels as well as in upgrading their technology to move toward cleaner, zero-effect solutions and pollution control measures.</li>
            <li><strong>Benefits and Incentives: </strong>To encourage MSMEs to get higher ZED Certification levels, the Ministry of MSME will offer graded incentives. A program dubbed MSME KAWACH (Knowledge Acquisition through WASH for an Accelerated COVID-19 Handling), which is based on the WASH (Workplace Assessment for Safety & Hygiene) Standard, will also be included in these incentives to help MSMEs prepare for and respond to the COVID-19 pandemic.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Components of ZED Certification"
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

export default Components;
