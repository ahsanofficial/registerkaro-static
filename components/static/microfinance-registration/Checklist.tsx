import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/Checklist to Set Up a Microfinance Company Registration_.svg";

const Checklist = () => {
  return (
    <div id="Checklist">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>
              <strong>Minimum Members: </strong>
              <ol>
                <li>
                  Private Limited Company: There should be at least two members.
                </li>
                <li>
                  Public Limited Company: There should be at least seven
                  members.
                </li>
              </ol>
            </li>
            <li>
              <strong>Directors Requirement: </strong>
              <ol>
                <li>Private Limited and Section 8: Minimum two directors.</li>
                <li>Public Limited Company: Minimum three directors.</li>
                <li>At least one director must be a resident of India.</li>
              </ol>
            </li>
            <li>
              <strong>Unique Name: </strong>
              Choose a unique and valid name for the company, ensuring
              compliance with naming guidelines.
            </li>
            <li>
              <strong>Capital Requirement: </strong>
              Ensure the availability of the required capital as per regulatory
              guidelines.
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Checklist to Set Up a Microfinance Company Registration"
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

export default Checklist;
