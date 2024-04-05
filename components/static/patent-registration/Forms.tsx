import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Forms = () => {
  return (
    <div id="Forms">
      <p className="main-para">
        There are certain forms you must be familiar with if you are intending
        to proceed ahead with patent application. Few of such forms are:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Form 1 :</strong>
            It includes the applicant’s name and address, the inventor(s) name
            and address, information similar to previous patent applications
            submitted for the current invention, filed by the inventor or any
            authorized entity, and a few other necessary declarations.
          </p>

          <p>
            <strong>Form 2 :</strong>
            The patent specification of the inventor is provided in Form 2.
            Depending on the kind of patent application the inventor is filing,
            it can be a provisional or a full patent specification.
          </p>

          <p>
            <strong>Form 3 :</strong>
            Form 3 is used to provide details on patent applications for the
            current invention that have been filed in any other nation. It will
            commit to the inventor providing written updates to the patent
            office on relevant applications for patents filed outside of India.
          </p>

          <p>
            <strong>Form 5 :</strong>
            Form 5 is used in the application to declare the inventors of the
            patent deemed to be registered aka Declaration to Inventor-ship
          </p>

          <p>
            <strong>Form 26 :</strong>
            Form 26 is for the Power of Attorney which is supposed to be filed
            by the Agent. Form 26 has the authority to give the patent agent the
            power of attorney to handle the inventor’s communications,
            communication, and patent application.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt=""
            className="Forms-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
