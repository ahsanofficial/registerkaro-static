import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/company-registration-in-australia/two.svg";

interface HeroProps {
  cityName: string;
}

export const Facts = ({ cityName }: HeroProps) => {
  return (
    <div id="Facts">
      <div className="facts flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5">
          <p><strong>1. </strong>Registering for GST is crucial for companies with an annual turnover exceeding AUD$75,000, requiring an Australian Business Number (ABN).</p>
          <p><strong>2. </strong>The application can be submitted online through the ABN Business Entry Point, with an ABN issued upon successful submission. </p>
          <p><strong>3. </strong>The ATO will confirm receipt within 28 days. Failure to obtain an ABN result in GST being applicable to all sales, with penalties for overdue payments. </p>
          <p><strong>4. </strong>Companies earning less than AUD$2 million annually face a 27.5% Corporate Tax rate. This information serves as a basic overview and does not replace professional advice. </p>
          <p><strong>5. </strong>It may contain generalizations, so seeking individualized advice is recommended for compliance with applicable laws.</p>
        </div>
        <div className="flex-5">
          <Image
            alt="Facts to Know"
            className="Facts-img w-100 Importance-img-h-100"
            height={440}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
