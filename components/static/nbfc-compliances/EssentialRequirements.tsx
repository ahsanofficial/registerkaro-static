import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/nbfc-compliances/Essential Requirements for NBFC Compliances.svg';

const EssentialRequirements = () => {
  return (
    <div id="EssentialRequirements">
        <p className="main-para">Earlier the online return filing was done through the COSMOS platform. However, RBI has now shifted the return filling platform into the XBRL system. The essential requirements for NBFC annual compliance are as follows:</p>
        <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
            <div className="flex-6">
                <p><strong>1. Reserve Bank of India Account :</strong>NBFCs need to get a User ID and Password from the Reserve Bank of India. These credentials are necessary for accessing and submitting supervisory returns using the XBRL system.</p>
                <p><strong>2. XBRL RBI File Setup :</strong>NBFCs must set up an XBRL RBI file. This software helps in preparing and submitting returns in the XBRL format. It's crucial for converting financial data into XBRL-compliant documents.</p>
                <p><strong>3. Regular Profile Updates :</strong>NBFCs should regularly update their profiles on the XBRL portal. Keeping profile information current ensures accurate communication and compliance via the XBRL system.</p>
            </div>
            <div className="flex-4">
                <Image
                    alt="EssentialRequirements of Company in Australia"
                    className="EssentialRequirements-img w-100 Importance-img-h-100"
                    height={300}
                    loading="lazy"
                    src={bft}
                />
            </div>
        </div>
    </div>
  );
};

export default EssentialRequirements;
