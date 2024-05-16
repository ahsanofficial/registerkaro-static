import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-opposition/When do you receive the Trademark.svg";

export const WhenRecieveOpposition = () => {
  return (
    <div id="WhenRecieveOpposition">
      <p className="main-para">The trademark opposition can be raised in the same matters as the trademark opposition except for the matter that has been approved by the Registrar. A few of such possible grounds to be raised are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="When do you receive the Trademark Opposition?"
              className="WhenRecieveOpposition-img w-100 img-h-100"
              height={650}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-6">
           <p><strong>1. Extensive Similarity :</strong> In case the filed trademark application holds a certain similarity with an already existing mark in the register, then in such a scenario, it is expected that you will experience trademark objection.</p>
           <p><strong>2. Inapt Content :</strong> In some cases where the descriptive content pertaining to the mark is inappropriate and against the guidelines prescribed under the applicable law, then it is expected that the registrar will raise an objection against the mark.</p>
           <p><strong>3. Misleading Mark :</strong> If the mark filed for trademark registration is deceptive in terms of presentability, meaning that it appears to be some other mark that already holds certain popularity and market reputation under their mark, then the application is objected to.</p>
           <p><strong>4. Non-distinctive or Unclear Design :</strong> Sometimes, the marks are unclear, be it in improper image clarity or not particularly defined marks when it comes to drawing a clarity under the mark, then the application is subject to objection.</p>
           <p><strong>5. Improper Symbol usage :</strong> There are certain symbols that are prohibited to be used while crafting a mark for your business. Such marks sometimes include national emblems, government signs, etc. If your mark filed for registration holds any such symbol, then the application received an objection.</p>
           <p><strong>6. Bad faith projection :</strong> If it is visible with the mark that the applicant intends to register the mark in bad faith with underlying dishonest intentions to confuse the consumers with the brand chosen, value provided, and goodwill established in another name, there, as well, the opposition can be filed.</p>
        </div>
        
      </div>
    </div>
  );
};
