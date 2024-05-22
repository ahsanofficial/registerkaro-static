import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/pitch-deck-for-start-ups/Elements.svg";
interface HeroProps {
    cityName: string;
}
const Elements = ({ cityName }: HeroProps) => {
  return (
    <div id="Elements">
      <p className="main-para">
        The following are the elements of a pitch deck:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Elements"
            className="Importance-img-h-100 w-100"
            height={750}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <h3>Problem</h3>
          <p>
            <strong>1. </strong>Introduction to problem
          </p>
          <p>
            <strong>2. </strong>How the problem is bothering
          </p>

          <h3>Solution</h3>
          <p>
            <strong>1. </strong>How the problem solved generally
          </p>
          <p>
            <strong>2. </strong>Your approach to providing a solution to the
            problem
          </p>
          <p>
            <strong>3. </strong>How is your solution different, from normal
            solution providers
          </p>

          <h3>Business Data</h3>
          <p>
            <strong>1. </strong>The data of the business, how the problem is
            solved
          </p>
          <p>
            <strong>2. </strong>How the business is standing in the market
          </p>

          <h3>Members</h3>
          <p>
            <strong>1. </strong>The people involved with the business
          </p>
          <p>
            <strong>2. </strong>The key Managerial Personal(KMP) in the company
          </p>
          <p>
            <strong>3. </strong>People having shareholding of the business
          </p>
          <p>
            <strong>4. </strong>People involved in the day-to-day management of
            the business.
          </p>

          <h3>Market</h3>
          <p>
            <strong>1. </strong>The market of the business in the domestic and
            international markets
          </p>
          <p>
            <strong>2. </strong>The scope of expansion of the business
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default Elements;
