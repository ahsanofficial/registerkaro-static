import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/qatar-company-registration/Benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Qatar has been a prominent choice of entrepreneurs for starting a business for many known reasons such as :</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Stable Economy:</strong> The stable and diverse economy of Qatar is another benefit of establishing a business owing to abundant natural resources in Qatar, particularly oil and gas, which are the main drivers of the country's economy. In spite of this, the government has made a concerted effort to diversify the economy by supporting businesses engaged in finance, travel, building, technology, and logistics. This diversification strategy reduces dependency on hydrocarbon earnings and opens up new opportunities for both domestic and foreign investors, ensuring a stable and sustainable business environment.</p>
           <p><strong> Advanced Infrastructure:</strong> The availability of advanced infrastructure in the country is another justification for incorporating a business in Qatar as a robust infrastructure is essential for promoting corporate expansion and enabling cross-border trade. Another reason to establish a company in Qatar is the significant expenditures the nation has made in the development of its ports and airports, which have facilitated the transportation of goods and services both within and beyond the nation.</p>
           <p><strong> Tax advantages: </strong>In Qatar, there are no export or capital gains taxes, nor is there value-added tax (VAT) except the 10% corporate tax which is imposed at a reduced rate. Withholding tax is not applied to dividends paid to non-resident stockholders. Despite this, royalties and interest payments have relatively low withholding rates for taxes of 5% and 7%, respectively. Furthermore, Qatar is a popular destination for expatriate workers because it does not require its foreign employees to pay personal income tax. </p>
           <p><strong> Skilled Workforce: </strong>The availability of skilled labor in Qatar is another advantage of registering a business there as enhancing human capital is a top priority for Qatar, which invests heavily in educational institutions and skill development. Furthermore, the 93.46% literacy rate in Qatar is another justification for operating a business there. This indicates that most Qataris have a college degree, which is helpful for business owners looking to staff their establishments with qualified employees.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of starting a Business in Qatar"
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
