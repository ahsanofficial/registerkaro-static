import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/italy-company-registration/Types_of_companies.svg"

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are following forms of company structure offered by Irish Laws when it comes to company registration in its land:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Italy"
              className="Types-img w-100"
              height={800}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. Private Company Limited by Shares: </strong>A LTD is a streamlined entity that can have one director and a separate secretary if necessary. It can also function as a separate entity.</p>
           <p><strong>2. Designated Activity Company: </strong>A DAC is a private business whose operations are restricted to the goals outlined in its memorandum of association. It also needs two directors at minimum. Ideal for special purpose companies, joint ventures, and situations where corporate governance is necessary to limit an entity's operations</p>
           <p><strong>3. Company Limited by Guarantee having a Share Capital: </strong>A private business in which the shareholders are liable for two things: first, any unpaid balances on the shares they own; and second, the amount they have committed to contribute to the company's assets in the event that it is wound up, which cannot be less than €1. Its operations are restricted to the goals outlined in its memorandum of association, and a minimum of two directors are required.</p>
           <p><strong>4. Company Limited by Guarantee not having a Share Capital: </strong>A CLG is a publicly traded corporation in which, in the event of its winding up, the liability of its shareholders is restricted to the amount they have agreed to contribute to its assets, subject to a minimum of €1 and not exceeding a predetermined amount. Ideal for organizations with philanthropic or professional missions that don't need funding from shareholders but nevertheless want to enjoy the advantages of limited liability and distinct legal personality. Its actions are restricted to achieving the goals outlined in its memorandum of association. </p>
           <p><strong>5. Public Limited Company (PLC): </strong>authorized to list and make available for public purchase shares on a stock exchange. Its actions are restricted to achieving the goals outlined in its memorandum of association. A PLC needs a minimum of two directors and a minimum of €25,000 in statutory share capital, of which at least 25% needs to be paid at the time of issuance. </p>
           <p><strong>6. Irish Collective Asset-Management Company: </strong>A new type of collective investment vehicle for UCITS funds and Alternative Investment Funds (AIFs) that resembles an investment company in many ways is called an ICAV. The Irish Collective Asset-Management Vehicles Act of 2015 governs it rather than the Companies Act of 2014. Its goal is to give managers and promoters a corporate structure created especially for investment funds, free from regulations and guidelines meant for other types of businesses, which would help save costs and administrative work.</p>
        </div>
        
      </div>
    </div>
  );
};
