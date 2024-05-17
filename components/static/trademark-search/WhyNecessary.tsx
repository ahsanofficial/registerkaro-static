import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-search/Why_is_it_necessary_to_do.svg";
interface HeroProps {
    cityName: string;
}
const WhyNecessary = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyNecessary">
        <p className="main-para">It is not easy to conduct a Trademark Search because it require a lot of time & effort which is why most people choose to outsource the process. If you decide to do you won search for Trademark, remember that it can be more expensive than going through an agency or any expert. When looking for a Trademark Public Search, you must consider the following criteria:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7 pt-3">
            <p><strong>Experts: </strong> Ensure that the Company has experience in more than 1 industry and expertise so they can give accurate results across different fields.</p>
            <p><strong>Cost: </strong>Ensure that the company charges a reasonable fee that’s competitive with other experts or agencies.</p>
            <p><strong>Timeline: </strong>Determine their turnaround time so you know long you will have to wait for your accurate results.</p>
            <p><strong>Results: </strong>You want to find a reputable company that provides reliable results so you can be confident your potential Trademark will be safeguarded from infringement.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Why is it necessary to do a Trademark Search in India?"
            className="WhyNecessary-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
       
      </div>
    </div>
  );
};

export default WhyNecessary;


