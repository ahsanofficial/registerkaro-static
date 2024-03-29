import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/increase-authorized/authorized_capital.svg";

const Meaning = () => {
  return (
    <div id="Meaning">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>It’s the maximum amount of share capital that a Company is allowed to issue to its shareholders as per its constitutional documents. Shares are defined as the financial instruments that form units of the overall capital and it is used to raise funds from the public. It is used to limit the ability of Directors to allot new shares which may have consequences over the control of the Company. It’s used to prevent any shift in the profit distribution balance. Often, the amount provided as Authorized Capital is not fully used & a small % to be kept as a safety buffer to raise additional capital when you need to increase.</p>
        </div>
        <div className="flex-3 ">
        <Image
            alt="Authorized Capital – Meaning"
            className="Meaning-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Meaning;


