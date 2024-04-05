import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhoCan = () => {
  return (
    <div id="WhoCan">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>All businesses that have registered for employee provident funds, or EPFs, are required to file an EPF return each month. Filing the EPF Returns is required if you have an EPF Registration. Employer and employee contributions to the Employee Provident Fund (EPF) total 12% of base pay over the course of employment. The employee’s EPF account receives a 3.67 percent transfer from the employer. The Employees Pension Fund (EPF) receives the remaining 8.33 percent from the employer. When the employee retires (on or after age 58), if they are jobless for two months, or if they pass away before reaching the designated retirement age, they may withdraw this sum.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="WhoCan-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoCan;


