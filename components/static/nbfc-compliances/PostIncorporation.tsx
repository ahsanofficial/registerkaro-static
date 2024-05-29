import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/pvt-reg/benefit.svg';

const PostIncorporation = () => {
    return (
        <div id="PostIncorporation">
            <p className="main-para">Upon receiving the Certificate of Registration from the RBI, Non-Banking Financial Companies (NBFCs) are obligated to adhere to various compliance regulations, which are as follows:</p>
            <div className="benefits flex w-80 m-auto mobile-flex-column">
                <div className="flex-4">
                    <Image
                        alt="Post-Incorporation NBFC Compliances"
                        className="PostIncorporation-img w-100 Importance-img-h-100"
                        height={775}
                        loading="lazy"
                        src={bft}
                    />
                </div>
                <div className="flex-6">
                    <p><strong>1. Membership with Credit Information Companies (CIC) :</strong>NBFCs are required to become members of all Credit Information Companies (CICs) operating in India. These entities furnish credit scores and pertinent information concerning individuals and entities. Prominent CICs are— CIBIL, Equifax Credit Information Services, Experian Credit Information Company, and CRIF High Mark Credit Information Services.</p>
                    <p><strong>2. Adoption of Fair Practice Code :</strong>NBFCs are mandated to embrace and abide by the Fair Practices Code as per RBI directives. This code delineates benchmarks for equitable lending practices, loan terms, and non-coercive methodologies for loan recovery.</p>
                    <p><strong>3. FIU-IND Registration :</strong>After establishment, every NBFC must undertake registration with the Financial Intelligence Unit-India (FIU-IND) to ensure annual compliance. This registration entails the submission of client particulars according to the Prevention of Money Laundering Act (PMLA). FIU-IND registration serves as a deterrent against financial crimes such as money laundering and terrorism financing.</p>
                    <p><strong>4. Central KYC Registration :</strong>Many NBFCs opt to register with Central Know Your Customer (KYC) as an integral component of their annual compliance. Central KYC facilitates the maintenance of customer records for financial services.</p>
                    <p><strong>5. CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India) :</strong>CERSAI functions to preempt fraud in lending, particularly pertaining to equitable mortgages. Its function is to prevent multiple loans against the same asset from different financial institutions. Additionally, it oversees CKYC registration within India.</p>
                    <p><strong>6. Submission of Financial Information to Information Utilities :</strong>Creditors are obligated to furnish financial particulars and asset information to Information Utilities as per Section 215 of the Insolvency and Bankruptcy Code, 2016. This practice is imperative for upholding precise financial records and supporting insolvency proceedings.</p>
                </div>
            </div>
        </div>
      );
};

export default PostIncorporation;
