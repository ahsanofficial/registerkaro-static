import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/three.svg";

const Penalties = () => {
  return (
    <div id="Penalties">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
            <p>Any person who knowingly makes a false statement or provides false information in the incorporation document or accompanying statement: Faces imprisonment for up to 2 years and is subject to a fine ranging from a minimum of ten thousand rupees to a maximum of five lakh rupees.Dissolution and Winding-Up: Dissolving the existing firm post-conversion.
            </p>
            <p><strong>Application for Winding Up:</strong> If a limited liability partnership (LLP) is found liable for winding up under the LLP Act or any other applicable law, and the Central Government deems it necessary due to specific circumstances described in sub-clauses (i) or (ii) of clause (c) of subsection (3) of section 43, the Central Government has the authority to take action. If the LLP is not already undergoing winding up proceedings by the Tribunal, the Central Government can appoint a person to petition the Tribunal for winding up the LLP on the grounds of being just and equitable.</p>
            <p><strong>Winding Up and Dissolution</strong>
            Winding up of the LLP can occur either voluntarily or through an order from the Tribunal. Following the winding-up process, the LLP may proceed to dissolution.
            </p>
        </div>
        <div className="flex-4">
        <Image
            alt="Penalties for False Statements"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Penalties;


