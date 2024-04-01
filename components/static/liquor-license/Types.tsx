import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are following licenses for the Liquor related services:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
           <p><strong>Beer and Wine License : </strong> For businesses who want to exclusively sell moderately alcoholic beverages like wine and beer. Remember that these companies shouldn’t sell strong liquor.</p>
           <p><strong>Restaurant Liquor Licence : </strong> For eateries that want to provide alcoholic beverages. Only establishments that receive less than 40% of their total revenue from the sale of alcohol are eligible for this license.</p>
           <p><strong>Tavern License : </strong> For companies where the majority of their income come from the selling of alcohol</p>
           <p><strong>Brewpub License : </strong> For businesses who produce their own wine and beer.</p>
           <p><strong>Temporary License : </strong> To provide alcohol at a gathering or party where fewer than twenty lakh persons are present</p>
           <p><strong>FL-4 License : </strong> For those who want to offer alcohol at an exclusive gathering in a private home, resort, or condominium</p>
           <p><strong>L1 : </strong> For those who conduct wholesale supply of liquor in Indian Mainland</p>
           <p><strong>L3 : </strong>Permit for the serving of foreign liquors in Hotels and Hotel Rooms</p>
           <p><strong>L5 : </strong> Permit for the serving of liquor in bars or restaurants within the hotel premises</p>
           <p><strong>L6 : </strong> For those who conduct retail supply of liquor in Indian Mainland</p>
           <p><strong>L19 : </strong> Permit for the serving of foreign liquors in Clubs</p>
        </div>
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in UK"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
