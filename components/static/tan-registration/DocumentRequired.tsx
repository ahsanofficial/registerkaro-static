import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-registration/who_needs.svg";

interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
            <p className="main-para" style={{ textAlign: "left" }}>Tax Deducting Entities: Any person or entity that has to deduct taxes at the source while doing specific operations, such paying contractors, distributing salaries, or paying rent that exceeds Rs.1,80,000 annually.</p>

      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Who Needs to Get a TAN?"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p ><strong>Appointment Restrictions:</strong><br/></p> 
            <p className="ps-5"><strong>1. Non-Profit Organizations: </strong>A company cannot simultaneously appoint or employ both a managing director and a manager.</p>
            <p className="ps-5"><strong>2. Business Branches:</strong>The tenure of appointment for a managing director, whole-time director, or manager cannot exceed five years at a time.</p>
            <p className="ps-5"><strong>3. Individuals with salaries: </strong>Re-appointment is prohibited within one year before the expiry of the current term.</p>

         
        </div>
       
      </div>
    </div>
  );
};
