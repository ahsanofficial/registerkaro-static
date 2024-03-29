import React from "react";
interface HeroProps {
    cityName: string;
}
export const DifferentTable = ({ cityName }: HeroProps) => {
  return (
    <div className="w-80 m-auto" id="DifferentTable">
      <table>
        <tr>
          <th className="first">Forms</th>
          <th className="last">Description</th>
        </tr>
        <tr>
          <td>Form-I</td>
          <td>
            This application from is for the grant of a Hallmark Registration
            Certificate to jewelers to sell Hallmark articles.
          </td>
        </tr>
        <tr>
          <td>Form-IV</td>
          <td>
            Application for Recognition of Assaying & Hallmarking Centre as per
            IS 15820
          </td>
        </tr>
        <tr>
          <td>Form-V</td>
          <td>
            Affidavit cum undertaking submitted by Assaying & Hallmarking Centre
            for BIS Recognition
          </td>
        </tr>
        <tr>
          <td>Form-VII</td>
          <td>
            The renewal application of Recognition of Assaying & Hallmarking
            Centre as per IS 15820
          </td>
        </tr>
        <tr>
          <td>Form-VIII</td>
          <td>Application for grant License to use the Hallmark</td>
        </tr>
        <tr>
          <td>Form-XIII</td> <td>Renewal Application of License</td>
        </tr>
        <tr>
          <td>Schedule-II</td>
          <td>
            Fee for Grant & Renewal of Recognition of Assaying & Hallmarking
            Centre
          </td>
        </tr>
        <tr>
          <td>Schedule-V</td>
          <td>Fee for Grant & Renewal of License to Refinery/Mint</td>
        </tr>
      </table>
    </div>
  );
};
