import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-in-director/what_is_the.svg";

const Role = () => {
  return (
    <div id="Role">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="What is the Role of a Company Director?"
            className="Role-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>Generally, a Company acts through 2 bodies of people one is its shareholders & other is its BoD (Board of Directors). The BoD are in charge of the management of the Company; they make the strategic & operational decisions of the Company & are responsible for ensuring that the Company meets its legal obligations. The primary role of a Director is to participate in Board Meetings to enable the board to reach such decisions & ensure that the Company’s obligations are fulfilled. The Directors of a Company are effectively the Company’s Agents, appointed by the Shareholders to manage the Company’s daily affairs. The basic rule is that Directors should act combinedly as a Board but generally the board may also delegate certain of its powers to individual Directors/to a committee of the Board.</p>
            <p>You may also be an employee or a Shareholder of the Company (or both) & if so, may have additional rights & duties going beyond those purely associated with your Office as a Director. It’s vital that you draw a difference between these separate roles. This guide doesn’t deal with the separate rights & duties which you may also have as an employee or a Shareholder.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Role;


