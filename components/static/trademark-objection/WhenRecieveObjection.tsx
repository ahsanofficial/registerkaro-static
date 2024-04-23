import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/qatar-company-registration/types.svg";

export const WhenRecieveObjection = () => {
  return (
    <div id="WhenRecieveObjection">
        <p className="main-para">For establishing a business in Qatar, you may choose one of the following company structure:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="WhenRecieveObjection of companies for Company Registration in Qatar"
              className="WhenRecieveObjection-img w-100 img-h-100"
              height={1000}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-6">
           <p><strong>1. Similarity with existing Trademark :</strong> In case the filed trademark application holds a certain similarity with an already existing mark in the register, then in such a scenario, it is expected that you will experience trademark objection.</p>
           <p><strong>2. Inappropriate Content :</strong> In some cases where the descriptive content pertaining to the mark is inappropriate and against the guidelines prescribed under the applicable law, then it is expected that the registrar will raise an objection against the mark.</p>
           <p><strong>3. Non-submission of TM-48 Trademark Form :</strong> If no TM-48 Trademark Form has been submitted, it is expected that the application field for trademark registration will be objected against for the said reason.</p>
           <p><strong>4. Deceptive Mark :</strong> If the mark filed for trademark registration is deceptive in terms of presentability, meaning that it appears to be some other mark that already holds certain popularity and market reputation under their mark, then the application is objected to.</p>
           <p><strong>5. Non-distinctive or Unclear Design :</strong> Sometimes, the marks are unclear, be it in improper image clarity or not particularly defined marks when it comes to drawing a clarity under the mark, then the application is subject to objection.</p>
           <p><strong>6. Improper Symbol usage :</strong> There are certain symbols that are prohibited to be used while crafting a mark for your business. Such marks sometimes include national emblems, government signs, etc. If your mark filed for registration holds any such symbol, then the application received an objection.</p>
           <p><strong>7. Application Error :</strong> If the application contains any typo error or any incorrect information pertaining to the applicant’s details, then the application for trademark registration faces a pedal of objections.</p>
           <p><strong>8. Wrong form selection :</strong> Many applicants choose the wrong form for Trademark registration filing. If you have also chosen the wrong form, then your application can experience objection from the Registrar. Thus, you will be liable to file for the application again with the right form.</p>
        </div>
        
      </div>
    </div>
  );
};
