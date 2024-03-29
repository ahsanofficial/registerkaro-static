import React from "react";
interface HeroProps {
    cityName: string;
}
export const Fees = ({ cityName }: HeroProps) => {
  return (
    <div className="w-80 m-auto" id="Fees">
      <table>
        <tr>
          <th className="first"> Business Trunover </th>
          <th> Application Fee</th>
          <th className="last">Registration Fee</th>
        </tr>
        <tr>
          <td>Upto Rs.5 crore</td>
          <td>Rs. 2000/-</td>
          <td>Rs. 7500/-</td>
        </tr>
        <tr>
          <td>From Rs. 5 crore to Rs. 25 crore</td>
          <td>Rs. 2000/-</td>
          <td>Rs. 15000/-</td>
        </tr>
        <tr>
          <td>From Rs.25 crore to 100 crore</td>
          <td>Rs. 2000/-</td>
          <td>Rs. 40000/-</td>
        </tr>
        <tr>
          <td>Above Rs.100 crore</td>
          <td>Rs. 2000/-</td>
          <td>Rs. 80000/-</td>
        </tr>
		
		
		
		
      </table>
    </div>
  );
};
