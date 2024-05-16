import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/gsp-registration/Documents Required for GSP_.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="documentRequired flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
            <p><strong>1. </strong>Product Description</p>
            <p><strong>2. </strong>Digital Signature Certificate</p>
            <p><strong>3. </strong>Export-Import Code</p>
            <p><strong>4. </strong>Commercial Invoice</p>
            <p><strong>5. </strong>Manufacturer Exporter Declaration</p>
            <p><strong>6. </strong>Email-Address and Mobile Number</p>
            <p><strong>7. </strong>Purchase Order from Importer</p>
        </div>
        <div className="flex-3">
            <Image
              alt="Documents Required for GSP"
              className="Importance-img-h-100 w-100"
              height={300}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
