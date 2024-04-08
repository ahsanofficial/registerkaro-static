import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/income-tax-filing-online/Eligibility_criteria_for_Income_Tax_Filing_Online.svg";
interface HeroProps {
    cityName: string;
}
export const Prerequisites = ({ cityName }: HeroProps) => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Fulfilling income tax filing requirements is now obligatory under the prevailing Income Tax regulations. Nevertheless, there are specific exemptions to this mandate, as outlined below:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Exception 1: Annual Income Up to Rs. 5 Lakh for HUF/Individuals :</strong> Tax assesses falling under the category of Hindu Undivided Family (HUF) or individuals are exempt from mandatory e-filing if their annual income, encompassing both exempt and non-exempt sources, does not exceed Rs. 5 lakh.</p>
           <p><strong>Exception 2: Super Senior Citizens (80 Years and Above) :</strong> Another exception applies to super senior citizens, i.e., individuals aged 80 years or above, during the relevant financial year. Such individuals are not compelled to undergo mandatory e-filing.</p>
           <p>In both scenarios mentioned above, taxpayers have the flexibility to choose between two modes of filing their income tax returns:</p>
           <p><strong>E-Filing Option: </strong> Taxpayers falling within the stipulated exemptions can opt to electronically file their income tax returns.</p>
           <p><strong>Paper ITR Form Option: </strong> Alternatively, they have the choice to utilize the appropriate paper-based ITR form for filing their returns.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Eligibility criteria for Income Tax Filing Online"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
      <p className="main-para">It’s imperative for taxpayers to be aware of these exceptions, ensuring that they comply with the appropriate filing method as per their eligibility. This flexibility allows eligible individuals, including those with lower incomes or advanced age, to select the filing approach that aligns with their preferences and ease of compliance.</p>
    </div>
  );
};
