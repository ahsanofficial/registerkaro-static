import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Prerequisites_of.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">You must known about the following taxes you might have to pay while operating your business in Italy:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       <div className="flex-4 ">
          <Image
            alt="Types of Taxes you must know"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-3">
           <p><strong>Tonnage Tax: </strong>Shipping companies that operate in Italy through a PE and that are tax resident in Italy may both be eligible for and choose to be subject to the Italian tonnage tax scheme. In essence, the system permits the computation of presumptive revenue by allocating the net tonnage of the eligible ships to the effective shipping days (tonnage income).</p>
           <p><strong>Value Added Tax: </strong>The usual VAT rate in Italy is 22%. Discounted prices are offered for the following particularly mentioned supplies of products and services at the rate of 4% for food, beverages, and agricultural products that are listed, as well as e-books and e-periodicals that fulfill specific criteria and for the 5% for specific medical services, food herb sales, specific waterway, lake, and river transportation services, and district heating services.</p>
           <p><strong>Unified Municipal Tax: </strong>A service tax that real estate owners and renters must pay, with the exception of immovable assets intended for private use (which are distinct from immovable properties classified as belonging to cadastral categories A/1, A/8, and A/9). </p>
        </div>
       
      </div>
    </div>
  );
};
