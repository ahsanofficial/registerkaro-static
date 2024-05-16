import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ProcessObtain = () => {
  return (
    <div id="ProcessObtain">
        <p className="main-para">Following is the process to obtain a Network License:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. File the Network License Application via an Online Portal: </strong>Access the designated online portal for submitting network license applications.</p>
            <p><strong>2. Check Out the Checklist Provided: </strong>Review the checklist provided to ensure all required documents and information are prepared.</p>
            <p><strong>3. Fill Out the Application Form and Upload It Using Your Digital Signature Certificate (DSC):</strong> Complete the application form with accurate details and upload it securely using your DSC for authentication.</p>
            <p><strong>4. Wait for the Analysis of the Said Application: </strong>Allow for the necessary time for the submitted application to be analyzed by the licensing authority.</p>
            <p><strong>5. Obtain the Network License: </strong>Upon approval, receive the network license from the licensing authority.</p>
        </div>
       
      </div>
    </div>
  );
};

export default ProcessObtain;


