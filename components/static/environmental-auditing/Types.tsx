import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Now, we will be discussing the purpose for which the environmental audit would be serving the companies</p>
      <div className="Importance-img flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Types in environment-auditing"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong> 1. </strong>This helps the government to determine, how well the company has complied with all the applicable laws and regulations, by this the government can figure out how many companies are respectful towards their decisions.</p>
            <p><strong> 2. </strong> Helps in the smooth decision-making process, and it helps the company to be aware of the environmental consequences of a particular decision it decides to take.</p>
            <p><strong> 3. </strong> Proper assessment and measuring sticks of company work, help. Promotes the betterment of environmental health and helps the U.N in achieving their sustainable development goals.</p>
            <p><strong> 4. </strong> Contributes to providing negative and positive aspects of a project the company is undergoing.</p>
            <p><strong> 5. </strong> Helps in giving the general public a better understanding of the ongoing development and projects.</p>
            <p><strong> 6. </strong> Helps in preserving the natural environment and directs the company towards making use of the natural resources more responsibly.</p>
            <p><strong> 7. </strong> Upholding the public trust.</p>

        </div>
        
      </div>
    </div>
  );
};
