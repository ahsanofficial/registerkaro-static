import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="DocumentRequired">
      
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
        <div className="flex-3">
          <Image
            alt="hy register your company in Dubai?"
            className="Why-img w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-2">
          <p><strong>Insufficient Balance:</strong> When the account balance is insufficient for the cheque to be encashed, then in such scenario it is expected to receive a notice for cheque bounce.</p>
          <p><strong>Expired Cheques:</strong> The cheque will be returned unpaid if it is presented for payment after the specified date..</p>

          <p><strong>Signature mismatch:</strong> A cheque will be returned unpaid if the signature on it does not correspond to the one on file with the bank.</p>

          <p><strong>Account number mismatch: </strong> The cheque will be returned unpaid if the account number on the cheque does not match the account number of the payer.</p>

          <p><strong>Damaged Cheques:</strong>  The bank may refuse to honor a cheque that is defaced or defaced.</p>
        </div>
      </div>
    </div>
  );
};
