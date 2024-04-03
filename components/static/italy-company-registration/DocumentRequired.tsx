import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Documents.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You need to have following documents for registration process in Italy [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1. </strong> Company Name  </p>
            <p><strong>2. </strong> Company Registration Number [Numero REA] </p>
            <p><strong>3. </strong> Company type/Legal form/ Forma giuridica – Societa’ a Responsabilita’ Limitata </p>
            <p><strong>4. </strong> Tax code [Codice fiscale] </p>
            <p><strong>5. </strong> Registered Office address along with proof </p>
            <p><strong>6. </strong> Company Statutes such as Memorandum of Association, Article of Association </p>
            <p><strong>7. </strong> Document stating Company Objective and goals </p>
            <p><strong>8. </strong> Shareholder’s details [ list of their names, identity proof, documents stating their financial health, affidavit] </p>
            <p><strong>9. </strong> Director’’s details [ list of their names, identity proof, documents stating their financial health, affidavit] </p>
            <p><strong>10. </strong> Transfer of Ownership [if any] </p>
            <p><strong>11. </strong> Board Resolution </p>
            <p><strong>12. </strong> Parent Company details [if any] </p>
            <p><strong>13. </strong> Financial Documents of company showcasing financial health, and capital deposition </p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={820}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
