import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Eligibility for Professional Tax Registration.svg";
interface HeroProps {
    cityName: string;
}
export const EligibilityProfessional = ({ cityName }: HeroProps) => {
  return (
    <div id="EligibilityProfessional">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
       
        <div className="flex-4">
            <Image
              alt="Eligibility for Professional Tax Registration"
              className="Importance-img-h-100 w-100"
              height={560}
              loading="lazy"
              src={dft}
            />
          </div>
          <div className="flex-7 pt-5">
            <p><strong>1. Individuals:</strong> Self-employed individuals and freelancers must register for professional tax.</p>
            <p><strong>2. Companies: </strong>All types of companies, including public, private, and one-person companies, need to register.</p>
            <p><strong>3. Partnerships:</strong> Businesses involving two or more individuals must also register.</p>
            <p><strong>4. Co-operative Societies: </strong>Co-operative societies formed for mutual assistance must register.</p>
            <p><strong>5. Associations of Persons:</strong> Groups formed by two or more individuals for legal purposes are also liable.</p>
            <p><strong>6. Hindu Undivided Families (HUFs):</strong> HUFs are considered separate entities for taxation and may need to register for professional tax if required by their state.</p>

        </div>
      </div>
    </div>
  );
};
