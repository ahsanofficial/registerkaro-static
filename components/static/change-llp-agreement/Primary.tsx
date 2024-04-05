import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-llp-agreement/Primary_Reasons.svg";

const Primary = () => {
  return (
    <div id="Primary">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>Change in partners;</p>
            <p><strong>2. </strong>Change in the name of LLP;</p>
            <p><strong>3. </strong>Change in rights and duties;</p>
            <p><strong>4. </strong>Change in contribution of the LLP;</p>
            <p><strong>5. </strong>Change in business activities;</p>
            <p><strong>6. </strong>Change in registered address;</p>
            <p><strong>7. </strong>Change in profit-sharing ratio;</p>
            <p><strong>8. </strong>Other changes in the LLP agreement;</p>
            <p><strong>9. </strong>Winding up or dissolution;</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Primary Reasons – Change LLP Agreement"
            className="Primary-img w-100"
            height={520}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Primary;


