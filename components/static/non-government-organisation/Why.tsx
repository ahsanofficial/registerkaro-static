import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="Instruction">
 <p className='main-para mb-2'>Here is a list of documents essential for different types of NGO registration.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
       
        <div className="flex-7 ">
          <p >
            <strong>1.  Documents Required for Trust Registration:</strong>
            </p>
            <p className="ps-5">
           <strong>1.</strong> Electricity or water bill of registered office as address proof.
          </p>
          <p className="ps-5">
           <strong>2.</strong>Identity proof (Voter ID, Driving Licence, Passport, Aadhaar Card) of at least two members of the company.
          </p>


          <p >
            <strong>2. Documents Required for Societies Registration:</strong>
            </p>
            <p className="ps-5">
           <strong>1.</strong>Name of the Society.
          </p>
          <p className="ps-5">
           <strong>2.</strong>Identity proof of all members (Driving Licence, Copy of Passport, Voter ID, Aadhaar card)
          </p>
          <p className="ps-5">
           <strong>3.</strong>Address proof of the registered office.
          </p>
          <p className="ps-5">
           <strong>4.</strong>2 copies of the Memorandum of Association (MoA) and By-laws of the society.
          </p>


          <p >
            <strong>3. Documents Required for Section 8 Company Registration:</strong>
            </p>
            <p className="ps-5">
           <strong>1.</strong> Identity proof of all the Directors (Driving Licence, copy of Passport, Voter ID, Aadhaar card).
          </p>
          <p className="ps-5">
           <strong>2.</strong>Address proof (electricity or water bill or house tax receipt) of the registered office.
          </p>
          <p className="ps-5">
           <strong>3.</strong>Name of the Company for approval.
          </p>
          <p className="ps-5">
           <strong>4.</strong>Memorandum of Association (MoA) and Articles of Association (AoA) of the Company..
          </p>
          
        </div>

        <div className="flex-3">
          <Image
            alt="documents essential for different types of NGO registration  "
            className="Importance-img w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>


      </div>
    </div>
  );
};
