import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsdc-registration/NSDC Courses Available in India.svg";

interface HeroProps {
  cityName: string;
}

export const CoursesAvailable = ({ cityName }: HeroProps) => {
  return (
    <div id="CoursesAvailable">
        <p className="main-para">NSDC offers courses in the following skill sectors:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>Apparel Made-Ups & Home Furnishing Sector Skill Council</li>
            <li>Capital Goods Skill Council</li>
            <li>Domestic Workers Sector Skill Council</li>
            <li>Food Industry Capacity & Skill Initiative</li>
            <li>Gem & Jewellery Skill Council of {cityName}</li>
            <li>Healthcare Sector Skill Council</li>
            <li>Indian Plumbing Skills Council</li>
            <li>IT-ITeS Sector Skill Council</li>
            <li>Logistics Sector Skill Council</li>
            <li>Media & Entertainment Skill Council</li>
            <li>Skill Council for the Mining Sector and more.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="NSDC Courses Available in India"
            className="Importance-img-h-100 w-100"
            height={540}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">So, people can get good training from the NSDC courses listed above, which can help them find different job opportunities. Moreover, those interested can pick from various NSDC online courses like Domestic Data Entry Operator- English, Computer Hardware Repairing, Computer Basics, and more. Besides improving skills, people might like these courses because they're easy to access online and cost less.</p>
    </div>
  );
};
