import React from "react";

interface HeroProps {
  cityName: string;
}

export const HowGet = ({ cityName }: HeroProps) => {
  return (
    <div id="HowGet">
      <div className="w-80 m-auto">
        <p>
          NSDC affiliation is of two types:
          <ol>
            <li>Funded Alliance</li>
            <li>Non-Funded Alliance</li>
          </ol>
        </p>
        <table>
          <tr>
            <th className="first">Basis</th>
            <th className="last">Funding Guideline</th>
          </tr>
          <tr>
            <td>Eligibility</td>
            <td>Legal entities including company, society, and trust etc.</td>
          </tr>
          <tr>
            <td>Fundings available for</td>
            <td>
              Training infrastructure (except acquisition or creation of
              immovables) and Working capital
            </td>
          </tr>
          <tr>
            <td>Rate of interest</td>
            <td>6% per annum</td>
          </tr>
          <tr>
            <td>Moratorium period for principal</td>
            <td>Up to 3 years</td>
          </tr>
          <tr>
            <td>Repayment duration</td>
            <td>7 years including a moratorium</td>
          </tr>
          <tr>
            <td>Minimum promotor contribution</td>
            <td>
              15% of investment requirement for not-for-profit entities and 25%
              for for-profit entities.
            </td>
          </tr>
          <tr>
            <td>Training commitment</td>
            <td>
                <strong>1. </strong>Standard proposals: 20,000 persons for more
                than 7 years
                <br />
                <strong>2. </strong>Corporates listed on NSE/BSE for over 3 years with a credit
                rating of A or more or foundations/ventures of such
                organisations: 5000 persons per centre for more than 7 years
                <br />
                <strong>3. </strong>Engineering colleges, private universities, polytechnics,
                ITI: 5000 candidates for over 7 years
                <br />
            </td>
          </tr>
          <tr>
            <td>Placement guarantee commitment</td>
            <td>Minimum 70%</td>
          </tr>
          <tr>
            <td>Collateral</td>
            <td>
                <strong>1. </strong>The first charge on assets or cash flows of the project or IP developed under the project.
                <br />
                <strong>2. </strong>Personal/corporate guarantee or Put-option in another associate company.
                <br />
                <strong>3. </strong>Pledge in case of corporates: shares worth a minimum of 51% of the equity of the project implementing and Pledge letters in case of not-for-profit entities.
                <br />
                <strong>4. </strong>Post-dated cheques
                <br />
                <strong>5. </strong>Hard collateral such as bank guarantee, mortgage of immovable
                property, lien on fixed deposits etc covering a minimum of 30%
                of the loan amount.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
