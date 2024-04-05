import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyOpt = () => {
  return (
    <div id="WhyOpt">
        <p className="main-para">Opting for PF return offers range of benefits to the user, which includes:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="WhyOpt-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Compliance adherence: </strong>The law requires that PF returns be filed, and noncompliance can result in fines and penalties.</p>
            <p><strong>Employee Security: </strong>A key component of a worker’s social security is their PF contributions, and timely filing of PF forms guarantees that their contributions are correctly recorded.</p>
            <p><strong>Tax Benefits: </strong>Employers can claim tax benefits by filing PF returns on a regular basis, and PF payments are tax deductible.</p>
            <p><strong>Systematic Record-Keeping: </strong>By filing PF returns on a regular basis, companies may keep track of and manage employee benefits more easily by keeping organized records of their employees’ PF contributions.</p>
        </div>
       
      </div>
    </div>
  );
};

export default WhyOpt;


