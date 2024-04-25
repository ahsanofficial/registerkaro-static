import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";


export const Types=  () =>{
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
          <Image
            alt="Why Outsource Accounting and Bookkeeping Services in India?"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
           <p className="main-para " style={{ textAlign: 'left' }}>
            {" "}
            According to Section 138 of the Negotiable Instruments Act, 1881 (“Act”), bouncing a cheque is a crime that carries a maximum two-year jail sentence, a fine up to double the value of the cheque , or both. A cheque is said to have bounced when the payee delivers it to the bank for payment and it is returned unpaid with a memo stating there are not enough funds
          </p>
          <p className="main-para" style={{ textAlign: 'left' }}>
            {" "}
            A cheque bounce can happen for a number of reasons, but it becomes an offense under the Act if the bounce is caused by insufficient money in the drawer’s account. The cheque that is being presented for payment must be rejected by the bank with a return memo indicating that there are not enough funds. In this situation, the cheque’s payee may send the drawer a notice requesting payment of the cheque amount, known as a “cheque bounce.”
          </p>
        </div>
      </div>
    </div>
  );
};