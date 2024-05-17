import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/joint-venture-agreement/Documents Required.svg";

interface HeroProps {
    cityName: string;
}

const DocumentsReq = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentsReq">
        <p className="main-para"> Following documents are required for Joint Venture Agreement:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-2">
        <ol className="fs-5">
              <li>A written agreement signed by all joint venture participants.</li>
              <li>Photocopies of government-issued identity documents of all parties, such as a passport, PAN card, or voter ID card.</li>
              <li>If the joint venture involves companies, a copy of the Incorporation Certificate of each company.</li>
              <li>PAN cards of all parties involved in the joint venture agreement.</li>
              <li>Bank account details of all parties, including cancelled cheques.</li>
              <li>A document outlining the joint venture’s objective, objectives, and each party’s rights and obligations.</li>
              <li>If the joint venture is a company, proof of registered office, such as a rent agreement or utility bill.</li>
            </ol>
        </div>
        <div className="flex-4">
        <Image
            alt="Documents Required for Joint Venture Agreement"
            className="DocumentsReq-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsReq;
