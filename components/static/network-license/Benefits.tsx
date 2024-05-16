import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/conversion-of-partnership-to-llp/one.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">In essence, network licensing streamlines license management, enhances control and tracking capabilities and promotes standardization within organizations.
Let's understand the benefits as discussed below.
</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> 1. Flexible and Efficient Use of Licenses: </strong>Network licensing allows licenses to be shared across a corporate network, enabling efficient usage across multiple workstations.</p>
           <p><strong> 2. Usage Tracking: </strong>Administrators can monitor license usage centrally, providing valuable data for administration, budgeting, and forecasting software investments.</p>
           <p><strong> 3. Control: </strong>Administrators have granular control over user access to software licenses, facilitating easy movement of licenses between groups and enabling specific features as needed.</p>
           <p><strong> 4. Standardization: </strong>Utilizing industry-standard technology like FLEXlm® ensures compatibility and access to the latest network licensing advancements, with widespread adoption among software vendors.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Network licensing offers four main benefits:"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
