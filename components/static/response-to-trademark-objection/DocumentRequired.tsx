import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/response-to-trademark-objection/Documents_required_for_a_trademark_objection_response_includes.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
            <Image
              alt="Documents required for a trademark objection response includes:"
              className="Importance-img-h-100 w-100"
              height={400}
              loading="lazy"
              src={dft}
            />
          </div>
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Examination Report</p>
            <p><strong>2. </strong>Proof of Identity</p>
            <p><strong>3. </strong>Response Letter</p>
            <p><strong>4. </strong>Evidence of Use of logo (such as product labels, packaging, advertising materials, or website screenshots).</p>
            <p><strong>5. </strong>Trademark Search Results</p>
            <p><strong>6. </strong>Any Other Supporting Documents</p>
        </div>

      </div>
    </div>
  );
};
