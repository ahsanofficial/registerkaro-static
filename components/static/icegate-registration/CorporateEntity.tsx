import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const CorporateEntity = () => {
  return (
    <div id="CorporateEntity">
      <p className="main-para">
        The entity name shall match the name on the license uploaded during
        ICEGATE registration.
      </p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>
            <strong>Board Resolution Document Guidelines : </strong>
            <ol>
              <li>
                Directors/Designated Partners' names on the Board Resolution
                should match those on the Ministry of Corporate Affairs website.
              </li>
              <li>
                Endorse the Board Resolution by the Company Secretary (if
                required by law) or by the majority of Directors/Designated
                Partners.
              </li>
              <li>
                Authorize the applicant for "ICEGATE/ Customs (Import/Export)/
                AD Code registration" in the Board Resolution.
              </li>
              <li>
                Ensure the Board Resolution is dated within the last 6 months.
              </li>
              <li>
                Affix the corporate entity seal/stamp on the Board Resolution.
              </li>
              <li>
                The Board Resolution should be on the corporate entity's
                letterhead.
              </li>
              <li>
                Refer to Annexure C for a sample format of the Board Resolution.
              </li>
            </ol>
          </p>
          <p>
            <strong>Authorization Letter Guidelines: </strong>
            <ol>
              <li>
                The Authorization Letter should be signed by the majority of
                Directors/Designated Partners or the Company Secretary.
              </li>
              <li>
                Authorize the applicant for "ICEGATE/Customs (Import/Export)/AD
                Code Registration" in the Authorization Letter.
              </li>
              <li>
                Affix the names of Directors/Designated Partners or Company
                Secretary with their respective signatures on the Authorization
                Letter along with the corporate entity's seal/stamp.
              </li>
              <li>
                The Authorization Letter should be on the corporate entity's
                letterhead.
              </li>
              <li>
                Upload the ID proof of the authorized person in the registration
                form.
              </li>
            </ol>
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="What is a Legal Defamation Notice"
            className="Definition-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para pt-3">
        These guidelines ensure that the registration process for corporate
        entities on ICEGATE is completed accurately and in compliance with the
        requirements.
      </p>
    </div>
  );
};

export default CorporateEntity;
