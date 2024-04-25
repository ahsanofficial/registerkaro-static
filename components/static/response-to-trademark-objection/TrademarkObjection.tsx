import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const TrademarkObjection = () => {
  return (
    <div id="TrademarkObjection">
      <p className="main-para">
        Trademark registration is pivotal for brand identity and protection, yet
        it often faces objections under Sections 9 and 11 of the Trademarks Act,
        1999. Understanding the Examination Report is crucial, as it outlines
        reasons for objections and guides the response process.A strategic
        response to trademark objections under Sections 9 and 11 is essential
        for successful registration, safeguarding brand identity and legal
        rights.
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Addressing Objections:</strong>
          </p>
          <p className="ps-5 pt-2">
            Responding to objections within 30 days is critical, utilizing Form
            TM48 for submission.
          </p>
          <p className="ps-5 pt-2">
            Common objections include procedural errors, incorrect
            classification, and challenges under Sections 9 and 11.
          </p>
          <p>
            <strong>Absolute Grounds (Section 9):</strong>
          </p>
          <p className="ps-5 pt-2">
            Proving distinctiveness or extensive use counters
            non-distinctiveness claims.
          </p>
          <p className="ps-5 pt-2">
            Avoiding descriptive terms or offensive content ensures compliance
            with trademark laws.
          </p>
          <p>
            <strong>Relative Grounds (Section 11):</strong>
          </p>
          <p className="ps-5 pt-2">
            Addressing conflicts with earlier trademarks requires
            differentiation or obtaining consent from owners.
          </p>
          <p className="ps-5 pt-2">
            Factors such as similarity, well-known trademark protection, and
            compliance with other laws influence registration decisions.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default TrademarkObjection;
