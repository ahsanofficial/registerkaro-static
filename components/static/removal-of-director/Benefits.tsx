import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column">

      <div className="flex-4">
          <Image
            alt="How can a director be removed?"
            className="Importance-img-h-100 w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">


           <p><strong>1. </strong>When a director decides to resign on their own, the necessary procedures are followed to delete their name from the directors' list. Notice of Board Meeting: The Company schedules a Board Meeting with a notice period of 21 days, not counting the day the notice was sent or received. Resignation Discussion: Board members convene during the Board Meeting to consider accepting the Director's resignation. Board Resolution to Accept Director's Resignation: The Board formally approves the Director's resignation upon mutual agreement.
Filing Form DIR-11 (Director’s Responsibility): The departing Director is responsible for submitting Form DIR-11. The form should contain the Board Resolution, evidence of resignation letter delivery, and a copy. It is the company's responsibility to file Form DIR-12 with the Registrar of Companies (RoC). The submission must have both the resignation letter and the Board Resolution. Director Name will be officially taken off MCA after necessary forms and formalities are completed, from the Company’s data on Ministry of Corporate Affairs website.</p>
           <p><strong>2. </strong> The procedures when a director is missing from every board meeting for more than twelve months are as outlined, If a director does not attend any board meetings for twelve months, even if they have requested a leave of absence, they will be considered to have left their position according to Section 167.  Submit Form DIR-12. After finishing the necessary procedures, the name of the respective Director will be deleted from the Ministry of Corporate Affairs (MCA) database.</p>
           <p><strong>3. </strong>The procedure for shareholders to remove a director is as outlined as, Issue a notification to all shareholders for a board meeting within seven days after a Director is removed via Ordinary Resolution. In order to dismiss a Director, a Company can proceed with an Ordinary Resolution, unless the Director was appointed by the Central Government or the Tribunal. Notice for a Board Meeting: Begin by convening a Board Meeting and providing a seven-day notice to all board members. This notice is to inform the directors about the planned removal of the Director. Resolution passed during Board Meeting to convene Extraordinary General Meeting (EGM). Furthermore, approve a resolution to dismiss the Director, pending shareholder consent. Inform members about the EGM, making sure to provide a 21-day notice period. A 21-day notice period is considered clear, not including the day the notice is sent or the day of the meeting. Voting at EGM: Members are requested to cast their votes on the resolution regarding the removal of the Director during the EGM. If most members agree with the decision, the resolution will be approved. Give the Director a chance to speak before the resolution is passed. Give them the opportunity to state their argument or offer a justification. Submit Form DIR-11 and Form DIR-12 to the Registrar of Companies after the resolution has been passed. The forms must contain both the Board Resolution and Ordinary Resolution attachments. Director's name will be officially taken off from the MCA website after successful submission of forms and completion of mandatory formalities. It is essential to adhere to these steps. </p>
        </div>
        
      </div>
    </div>
  );
};
