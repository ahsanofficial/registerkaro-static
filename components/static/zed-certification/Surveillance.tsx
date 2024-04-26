import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Surveillance = () => {
  return (
    <div id="Surveillance">
        <p className="main-para">As part of the ZED Certification, QCI’s Accredited Assessment Agencies will carry out a surveillance assessment 18 months after obtaining ZED Certification. Only MSMEs that have attained Silver and Gold Certification levels will be eligible for the surveillance evaluation.</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
         <ol>
            <li>For both Silver and Gold levels, the surveillance assessment will be carried out remotely. The assessment will cost the following:
                <ol>
                    <li><strong>ZED Gold Level: </strong>INR 20,000</li>
                    <li><strong>ZED Silver Level: </strong>INR 10,000</li>
                </ol>
            </li>
            <li>The following structure will be used in providing the MSMEs with financial support or subsidies for the surveillance assessment:
                <ol>
                    <li><strong>Micro Enterprises: </strong>80%</li>
                    <li><strong>Small Enterprises: </strong>60%</li>
                    <li><strong>Medium Enterprises: </strong>50%</li>
                </ol>
            </li>
         </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Surveillance under ZED Certification"
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

export default Surveillance;
