import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/nbfc-compliances/Types of NBFCs.svg';

const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Types of NBFCs"
            className="Types-img w-100 Importance-img-h-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        
          <div className="flex-6">
              <p><strong>1. On the basis of activities:</strong></p>
              <div className="ps-4">
                <p><strong>a. </strong>Infrastructure Finance Company (IFC)</p>
                <p><strong>b. </strong>Investment and Credit Company (ICC)</p>
                <p><strong>c. </strong>Systemically Important Core Investment Company (CIC)</p>
                <p><strong>d. </strong>NBFC- Non-Operative Financial Holding Company (NOFHC)</p>
                <p><strong>e. </strong>Mortgage Guarantee Companies</p>
                <p><strong>f. </strong>NBFC-Factors</p>
                <p><strong>g. </strong>NBFC- Microfinance Companies (MFIs)</p>
                <p><strong>h. </strong>Infrastructure; Debt Fund Non-Banking Financial Company (IDF-NBFC)</p>
              </div>
              <p><strong>2. On the basis of liabilities:</strong></p>
              <div className="ps-4">
                <p><strong>a. </strong>Deposit Accepting NBFCs</p>
                <p><strong>b. </strong>Non-Deposit Accepting NBFCs</p>
                <p><strong>c. </strong>Non-Deposit Accepting Systematically Important NBFCs</p>
                <p><strong>d. </strong>Other Non-Deposit Holding Companies.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;


