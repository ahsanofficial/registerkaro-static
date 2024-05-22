import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/pitch-deck-for-start-ups/How to prepare a pitch deck_.svg";
interface HeroProps {
    cityName: string;
}
const HowPrepare = ({ cityName }: HeroProps) => {
  return (
    <div id="HowPrepare">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5">
            <p><strong>1. </strong>Putting facts and information correctly</p>
            <p><strong>2. </strong>Presenting simply</p>
            <p><strong>3. </strong>Clear and concise</p>
            <p><strong>4. </strong>Must tell a story</p>
            <p><strong>5. </strong>Easy flowing information</p>
            <p><strong>6. </strong>Focus on differentiating the match</p>
            <p><strong>7. </strong>The transition between data must be smooth</p>
        </div>
        <div className="flex-5">
        <Image
            alt="How to prepare a pitch deck?"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default HowPrepare;


