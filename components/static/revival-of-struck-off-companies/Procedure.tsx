import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/Procedure_for_revival.svg";
interface HeroProps {
    cityName: string;
}
const Procedure = ({ cityName }: HeroProps) => {
  return (
    <div id="Procedure">
      <p className="main-para">
        <strong>
          The following is the procedure for revival of struck off Companies:
        </strong>
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">

          <h3>Preparation & filing of Petition</h3>

          <p>
            The petition under for the restoration of name of struck Company
            shall be filed with the National Company Law Tribunal (NCLT) within
            a period of 3 years from the date of Strike off.
          </p>

          <h3>Service of the petition to Respondents</h3>

          <p>
            A copy of the application shall be served on the Registrar of
            Companies and on such other persons as the Tribunal may direct
            either by hand or post with proper receipt, not less than 14 days
            before the date fixed for hearing of the application.
          </p>

          <h3>Hearing the Petition</h3>

          <p>
            NCLT shall hear the Petitioner and Respondent (ROC). It will also
            take note of the observations/ objections, if any, received. After
            hearing Both the Parties, if it is satisfied that struck off company
            is not a defunct company, it can order the restoration of name of
            company in the record of the ROC.
          </p>

          <h3>Directions by Tribunal</h3>

          <p>
            Where the Tribunal makes an order restoring the name of a company in
            the register of companies, the order shall direct that – The
            appellant shall deliver a certified copy to the Registrar of
            Companies within thirty days from the date of the order; On such
            delivery, the Registrar of Companies do, in his official name and
            seal, publish the order in the Official Gazette; the appellant shall
            pay to the Registrar of Companies costs as directed by Tribunal. The
            company shall file pending financial statements and annual returns
            with the Registrar and pay required fee within such time as may be
            directed by the Tribunal.
          </p>

          <h3>Filing of NCLT order with ROC</h3>

          <p>
            The Company shall file the copy of order with Registrar of Companies
            within a period of 30 days from the date of the order. The company
            shall file pending financial statements and annual returns with the
            Registrar with additional fee and comply with the requirements of
            the Companies Act, 2013 in this regard.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Procedure for revival of Struck off companies as per Companies Act, 2013"
            className="Procedure-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Procedure;
