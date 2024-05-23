import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-of-auditor/two.svg";

interface HeroProps {
  cityName: string;
}

const RemovalOfAuditor = ({ cityName }: HeroProps) => {
  return (
    <div id="RemovalOfAuditor">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Removal of Auditor"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>A special resolution and approval from the Central Government are required in order to dismiss an auditor before the completion of their term. Within a month of the Board Resolution being approved, Form ADT-2 seeks approval from the Central Government to dismiss auditors. The company needs to organize an Extraordinary General Meeting (EGM) within 60 days after obtaining approval from the central government to implement a special resolution. The provision specifies that the auditor must have an equal opportunity to address the meeting.
                <ol>
                    <li>MGT-14</li>
                    <li>ADT-2</li>
                    <li>RD-1</li>
                </ol>
            </li>
            <li>These are the forms required for the removal of a auditor
                <ol>
                    <li>As per Section 139, the Company can choose a new auditor if the current one has been serving for either five or ten years without interruption. In these cases, a Notice must be given to the AGM so that the Resolution for an appointment can be reviewed. The Notice should clearly specify that the current auditor cannot be re-appointed and should mention a new auditor. The organization is also required to give the leaving auditor a copy of the notification. Auditors who are retiring can create a presentation. If the auditor who is leaving writes a statement and asks the company to inform the company's members, the notice to the members must explicitly state that the auditor has made a statement.</li>
                    <li>Every individual who is entitled to get the meeting invitation will be given a duplicate of the presentation that has been prepared. If the necessary documents cannot be sent, the auditor's statement may be presented during the meeting. In situations where the representation is not sent as instructed, a copy must be submitted to the ROC.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RemovalOfAuditor;
