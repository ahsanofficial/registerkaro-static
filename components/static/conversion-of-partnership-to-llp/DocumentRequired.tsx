import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/conversion-of-partnership-to-llp/two.svg"

interface HeroProps {
  cityName: string;
}

export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
      <p className="main-para">
        You need to have following documents for registration process in Qatar
        [List is not exhaustive]:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3 align-content-center">
          <Image
            alt="Incorporation Document Requirements for Limited Liability Partnerships"
            className="Importance-img-h-100 w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-4 pt-5">
          <p>
            <strong>1.Requirement for Incorporation:</strong>
            <ol>
            <li>
              At least two individuals must associate for a lawful business to
              make a profit to form a Limited Liability Partnership (LLP).{" "}
            </li>
            <li>
              The incorporation document must be filed with the Registrar of the
              State where the LLP's registered office will be located,
              accompanied by prescribed fees.
            </li>
            </ol>
          </p>

          <p>
            <strong>2. Statement by Professionals:</strong>
          </p>
          <p >
            A statement, in a prescribed format, verifying compliance with the
            LLP Act and related rules must accompany the incorporation document.
            This statement must be made by either an advocate, a Company
            Secretary, a Chartered Accountant, or a Cost Accountant involved in
            the LLP formation, as well as by at least one subscriber to the
            incorporation document.
          </p>

          <p>
            <strong>3. Contents of the Incorporation Document:</strong>
          </p>
          <ol>
          <li >The incorporation document must:</li>
          <li >
            Be in the prescribed format. Specify the proposed name of the LLP.
          </li>
          <li >
            Describe the intended business activities of the LLP.
          </li>
          <li >
            Provide the address of the LLP's registered office.
          </li>
          <li >
            List the names and addresses of all proposed partners and designated
            partners at the time of incorporation.
          </li>
          <li >
            Include any other information as prescribed by the authorities.
          </li>
          </ol>
        </div>
       
      </div>
    </div>
  );
};
