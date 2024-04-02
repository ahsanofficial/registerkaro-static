import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
      <p className="main-para">The following are the benefits of PSARA License in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Empowers the training company;</p>
            <p><strong>2. </strong>This License helps in gaining the potential customers’ trust;</p>
            <p><strong>3. </strong>Increases credibility of agency;</p>
            <p><strong>4. </strong>Attracts more customers;</p>
            <p><strong>5. </strong>It ensures that the functioning of the organization is smooth;</p>
            <p><strong>6. </strong>Avoid denial of rights & services.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


