import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ImportantPoints = () => {
  return (
    <div id="ImportantPoints">
        <p className="main-para">Following are some vital factors to keep in mind while conducting a Trademark Search Availability in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. Trademark Type: </strong>Know the type of Trademark you are looking for, is it a symbol, logo, word, or a design or any other identifier? Before starting the search, it is important to know the nature of a Trademark. </p>
            <p><strong>2. Correct Legal Jurisdiction: </strong>Make sure that you are conducting your Trademark Search within the correct legal jurisdiction. In India, the Indian Trademark Registry is the Government Agency responsible for registering Trademarks and Copyrights. If you are also filing for a Trademark in another country, it is advisable to search through that country’s Trademark Office as well. </p>
            <p><strong>3. Differentiate Between Goods & Services: </strong>Consider differentiating between goods & services when conducting Trademark Searches. Some Marks are exclusive to specific types of goods (e.g., “Tata” for cars), while others are more suitable for services (e.g., “Boat” for headphones). While searching for Trademark for service-based products may be more challenging, conducting a detailed search is vital & considering submitting an application if required. </p>
            <p><strong>4. Required details for application: </strong>Make sure that all vital details are included when applying for Trademark Registration. This includes the complete full name & address of the applicant, as well as the application date. </p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="ImportantPoints-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default ImportantPoints;


