import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/increase-authorized/primary.svg";

const Primary = () => {
  return (
    <div id="Primary">
        <p className="main-para">Following are the main components of Authorized Capital:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="What are the primary components of Authorized Capital?"
            className="Primary-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Authorized Shares: </strong> This means the maximum number of shares a Company can legally issue and it is specified in the MoA (Memorandum of Association) or AoA (Articles of Association) of a Company.</p>
            <p><strong>Total Value: </strong> Nominal Capital signifies the maximum amount of capital a Company can raise via share issuance. You can calculate it by simply multiplying the number of Authorized Share by the par value per share.</p>
            <p><strong>Par Value per Share: </strong> This denotes the nominal value assigned to each share & sets a minimum issuance price. Remember that Par Value may not necessarily show the market value of the shares.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Primary;


