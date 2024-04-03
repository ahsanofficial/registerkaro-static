import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/italy-company-registration/Benefits_of_starting_a_Business_in_Italy.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Ireland offers wide range of benefits to the businesses operating in its mainland, such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Easy Setup: </strong>Ireland is regarded as one of the world's most productive locations to establish a business. Ireland permits companies to form their organizations in three to five working days, in contrast to other EU states where it could take weeks. Furthermore, the nation has a low bureaucratic jurisdiction, which means that changing directors and shareholders is simple and doesn't require a lot of paperwork.</p>
           <p><strong>Tax Benefits: </strong>The favorable tax environment is one of the most important factors when deciding whether to incorporate in Ireland. At 12.5%, the corporate tax rate is now among the lowest in the European Union. Despite the fact that it will rise to 15% for large corporations starting in 2024, it is still very competitive when compared to other countries. Furthermore, Ireland's vast network of over 70 double tax treaties reduces the incidence of double taxation and provides tax benefits to international companies. </p>
           <p><strong>Skilled Manpower: </strong>Ireland has a young, highly educated labor force at its disposal. The fact that almost 40% of Irish people are under 29 solidifies Ireland's position as the preferred jurisdiction in the long run. This group of people and the nation's accessibility to highly qualified corporate service providers make it a favorable business climate. A network of professional services, such as corporate service providers, law firms, and auditors, is available in Ireland and is necessary for seamless transactions and continuous assistance.  </p>
           <p><strong>Government Policies: </strong>Limited Companies could be more qualified for government grants, incentives, and programs. Governments frequently target businesses functioning as Limited Companies with specific support and financial aid initiatives. These programs can give you access to money, education, grants for research and development, and other tools that can support the expansion of your business.</p>
           <p><strong>Easy Credit Facility: </strong>Compared to partnerships or sole traders, limited companies typically have an easier difficulty getting credit or financing. Lenders and financial institutions frequently view Limited Companies as more stable and trustworthy businesses, which increases their propensity to grant credit applications. Businesses may use this easier access to financing to finance equipment purchases, business expansion, and other necessities. </p>
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
