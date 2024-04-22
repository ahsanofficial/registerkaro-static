import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const When = () => {
  return (
    <div id="When">
      <p className="main-para">
        Applicants have been given the power to make changes and rectify the
        Trademark, but in certain specific scenarios, such as :
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="When-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Application Form Error</strong>
            In case any error has been made by the applicant in the trademark
            registration application, for which you feel the requirement to
            change the same, you may file for the trademark rectification.
          </p>

          <p>
            <strong>Updating information</strong>
            If there is any information that has been changed since the filing
            of the trademark application and it is pertinent to the Trademark,
            you may file for Trademark Rectification to update such information.
          </p>

          <p>
            <strong>Registrar approved grounds</strong>
            Sometimes, the marks are unclear, be it in improper image clarity or
            not particularly defined marks when it comes to drawing a clarity
            under the mark, then the application is subject to objection by the
            registrar. Thereafter, to correct the grounds, you have to file for
            Trademark rectification.
          </p>

          <p>
            <strong>The aggrieved Party’s application</strong>
            In case the filed trademark application holds a certain similarity
            with an already existing mark in the register, then in such a
            scenario, it is expected that you will experience trademark
            objection or opposition, and then you will have to rectify your
            current application.
          </p>

          <p>
            <strong>Inadequate Mark Details</strong>
            If the mark filed for trademark registration is inadequate in terms
            of presentability, meaning that it appears to be some other mark
            that already holds certain popularity and market reputation under
            their mark, then you may also file for trademark rectification.
          </p>

          <p>
            <strong>Incorrect Information</strong>
            There are certain symbols that are prohibited to be used while
            crafting a mark for your business. Such marks sometimes include
            national emblems, government signs, etc. If your mark filed for
            registration holds any such symbol, then you can correct it with
            Trademark Rectification.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default When;
