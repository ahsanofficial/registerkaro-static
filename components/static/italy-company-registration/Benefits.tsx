import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/italy-company-registration/Benefits_of_starting_a_Business_in_Italy.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Italy offers wide range of benefits to the businesses operating in its mainland, such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>European Union: </strong>Italy's location in the geographic heart of the Mediterranean Sea facilitates companies' access to markets in the EU, Northern Africa, and the Middle East therefore acting as a vital hub linking eastern, central, and southern Europe. Much of it is made up of Italy's vast transport network, one of Europe's top logistical hubs. Italy's terminals contribute 20% of global maritime transit, 30% of petroleum traffic, and 25% of container traffic because of its strategic location in the Mediterranean. One of the main benefits of registering your business in Italy is that, as an EU member, it provides your company with access to the largest global marketplace.</p>
           <p><strong>Advanced Infrastructure: </strong>Another good reason to register your business in Italy is the country's strong and advanced infrastructure. The country boasts a large network of roadways, effective rail transit, and other modes of transportation. This reduces the cost of marketing for companies looking to expand into multiple regions of the nation and throughout Europe. </p>
           <p><strong>Skilled Workforce: </strong>Italy is well known for having top-notch educational institutions with Twenty esteemed universities located there. These educational resources contribute to the production of skilled workers for the Italian labor market. Therefore, having access to qualified and well-trained staff is another reason to register your business in Italy.  </p>
           <p><strong>Tax benefits: </strong>Compared to a number of other European countries, Italy enjoys lower tax rates as business tax rates are generally less than personal tax rates. The absence of capital gains tax in Italy makes ventures there alluring to foreign investors. The Value Added Tax, or VAT is reduced by 50% if a business presents proof of its financial situation, such as a calendar year loss or the inability to pay off all of its debts at once. All a company has to do to be eligible for this tax cut is demonstrate that it has had financial difficulties at some point in its business history.</p>
           <p><strong>Government Schemes: </strong>The Italian Trade Agency completely supports and aids in the expansion of foreign business owners across the nation by enacting a number of legislation and measures to increase company productivity, such as allotting 50% tax credit for private R&D investments, and a 40% reduction in capital commodity purchases. Moreover, Companies operating in priority locations will get financial incentives from the government in form of grants and low-interest loans that can account for up to 60% of a small and medium-sized enterprise's worth but less than 20,000 Euros for over a three-year period. </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of company registration in Itally"
            className="Benefits-img w-100"
            height={850}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
