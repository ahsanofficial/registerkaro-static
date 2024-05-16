import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">There are three types of WPC Certificate which are listed below:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=" the types of WPC Certificate"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      
        <div className="flex-7">
            <p><strong>1. Importer's License: </strong> WPC grants importers of wireless products in India an importer's license. Upon obtaining an importer's license, you are permitted to sell wireless devices that have been imported from overseas.</p>
            <p><strong>2. ETA (Equipment Type Approval):  </strong>Prior to being permitted for import into India, every wireless equipment operating in the de-licensed frequency spectrum must obtain ETA from WPC. Additionally, every Indian-made product needs to get a WPC ETA Certificate. These products include Bluetooth devices, Wi-Fi, RFID, and cell phones, among others.</p>
            <p><strong>3. Network License: </strong> A network license is required for any organization that wants to provide communication services including cable, DTH, and mobile networks using the country's limited radio frequency capacity.</p>

           
           
        </div>
       
      </div>
    </div>
  );
};
