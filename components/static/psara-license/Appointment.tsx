import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/appointment.svg";
interface HeroProps {
    cityName: string;
}
const Appointment = ({ cityName }: HeroProps) => {
  return (
    <div id="Appointment">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Appointment of Supervisors"
            className="Appointment-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>Applicants are mandated to appoint supervisors to align with the stipulations of the PSARA, 2005. These supervisors play a crucial role in overseeing and directing the agency’s operations, specifically in relation to the work conducted by security guards. The appointed supervisors must have a minimum of three years of work experience in either the army or the navy.</p>
        </div>
    
      </div>
    </div>
  );
};

export default Appointment;


