import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/new-zealand-company-registration/Why_start_a_business.svg"

export const WhyBene = () => {
  return (
    <div id="WhyBene">
        <p className="main-para">New Zealand always remain a choice among many for the investors and entrepreneurs when the talk is about starting a business in some country for various reasons such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Business Friendly:</strong> New Zealand has an environment that is conducive to business, which makes it easy to establish a company there. No specific licenses are required to establish a corporation in New Zealand because the country's government is amenable to the concept of foreign ownership. This illustrates New Zealand's welcoming regulatory environment for foreign business owners, since it does not impose onerous administrative and bureaucratic barriers on foreign business owners looking to open a location.</p>
           <p><strong> Government Policies:</strong> The New Zealand Trade and Enterprise Agency provides tax credits of around NZ$ 255,000 per year to companies for research and development expenses, together with financial insurance that can guarantee up to 80% of the value of goods and services sold overseas. Moreover, programs such as the Flexi-Wage Subsidy aim to lessen the financial burden on businesses in New Zealand.</p>
           <p><strong> Strategically Located:</strong> New Zealand seems to have a strategic location as seen geographically which connects it with the rest of the world in the most convenient way, therefore increasing the trade among the countries. For this very reason, New Zealands tends to be in the list of countries which are most convenient and favorable to start a business. </p>
           <p><strong> Healthy Financial Sector:</strong> The successful banking sector in New Zealand is another justification for setting a company there as obtaining loans for business purposes in New Zealand is a straightforward process. Furthermore, New Zealand has established itself as a leading offshore banking center for opening company accounts owing to its easy process which again makes New Zealand one among the best countries in the world for getting loans, according to the World Bank.</p>
           <p><strong> Economic Stability:</strong> New Zealand's economy has consistently grown throughout time. With a steady GDP growth of 3.7% in 2021, the nation's consumer expenditure has been rising steadily, resulting in New Zealand known for being a hub for corporate expansion. Additionally, Technology would help the country flourish by providing incentives and support to businesses so they can operate effectively.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Why start a business in New Zealand?"
            className="WhyBene-img w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
