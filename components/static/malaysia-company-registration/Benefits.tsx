import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/malaysia-company-registration/Why_to_start_a_business.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Malaysia offers wide range of benefits to the businesses operating in its mainland, such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Tax Benefits: </strong>Malaysian governments have laid down corporate tax rates at quite low rates to make it feasible for businesses to expand and grow. If a resident company has paid-up capital of less than RM 2.5 million, income of less than RM 50 million, and does not directly or indirectly manage another company with paid-up capital of more than RM 2.5 million, it is liable to pay corporation tax at the rate of 17%. Other than the businesses mentioned above, resident companies and non-resident enterprises pay taxes at a CIT rate of 24 percent.</p>
           <p><strong> Skilled Workforce: </strong>Because the government encourages the development of human resources across all industries, the majority of Malaysian workers have advanced degrees. With cheaper expenses than other countries in the region, Malaysia has one of the best workforces in all of Asia. Education and training are highly valued in Malaysia, where a growing number of public training institutions, including technical schools, polytechnics, industrial training institutes, and skill development centers, have been established to meet the industry's increasing demand for certain qualifications.</p>
           <p><strong> Trade Agreements: </strong>Malaysia holds free trade agreements with many countries to offer an advanced economic atmosphere for businesses. Few of such agreements includes Malaysia-Japan Economic Partnership Agreement (MJEPA), Malaysia-Pakistan Closer Economic Partnership Agreement (MPCEPA), Malaysia-New Zealand Free Trade Agreement (MNZFTA), Malaysia-India Comprehensive Economic Cooperation Agreement (MICECA), Malaysia-Chile Free Trade Agreement (MCFTA), Malaysia-Australia Free Trade Agreement (MAFTA), Malaysia-Turkey Free Trade Agreement (MTFTA), etc.</p>
           <p><strong> Healthy Economy: </strong>According to The Heritage Foundation's Index of Economic Freedom, Malaysia has the 24th-freest economy in the world. According to the World Economic Forum's 2019 Global Competitiveness Report, Malaysia's economy ranks 27th in the world for competitiveness. When it comes to minority shareholder protection, Malaysia ranks second globally. Therefore, Malaysia tends to offer a healthy economic environment for the businesses to flourish and grow, consequently attracting investors and businessmen from all over the world.</p>
           <p><strong> Government Policies: </strong>Malaysian government schemes and policies offer a premium environment for the businesses to nurture and grow. Many of such schemes are for Startups such as Skim Usahawan Permulaan Bumiputera (SUPERB), Digital Content Grant (DCG), Malaysia Digital X-Port Grant (MDXG), Malaysia Digital Catalyst Grant (MDCG).</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Why to start a business in Malaysia?"
            className="Benefits-img w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
