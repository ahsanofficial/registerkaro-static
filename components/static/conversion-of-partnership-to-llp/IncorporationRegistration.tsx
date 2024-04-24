import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const IncorporationRegistration = () => {
  return (
    <div id="IncorporationRegistration">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-4">
            <p><strong>1.</strong> Once the Registrar verifies compliance with the requirements specified in clauses (b) and (c) of subsection (1) of section 11, the incorporation process proceeds as follows:</p>
            <p><strong>2.</strong> The Registrar retains the incorporation document and initiates further actions if the condition outlined in clause (a) of subsection (1) of section 11 has been satisfied.</p>
            <p><strong>3.</strong> Within fourteen days of compliance, the Registrar Registers the incorporation document and issues a certificate confirming the incorporation of the limited liability partnership, using the specified name. The Registrar may consider the statement provided under clause (c) of subsection (1) of section 11 as sufficient evidence of compliance with the requirement specified in clause (a) of the same subsection. The certificate, bearing the Registrar's signature and authenticated by his official seal, is deemed conclusive evidence of the LLP's incorporation under the specified name.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default IncorporationRegistration;


