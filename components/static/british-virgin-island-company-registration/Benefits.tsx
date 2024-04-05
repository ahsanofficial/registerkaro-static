import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/british-virgin-island-company-reg/Benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Following are certain benefits that one enjoys on starting a business in BVI:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Tax Advantages: </strong>The British Virgin Islands' advantageous tax system is one of the benefits of establishing a business there. The BVI features a tax-neutral system that excludes individual income tax, corporate and capital gains taxes, and withholding taxes on profits, interest, and royalties. Offshore companies that pay business taxes to the British Virgin Islands government are subject to a zero percent tax rate. This is another advantage of registering a business in the British Virgin Islands; it gives businesses a significant competitive advantage by maximizing earnings and optimizing tax planning strategies. </p>
           <p><strong> Confidentiality: </strong>Establishing a business in the British Virgin Islands is also motivated by the country's greater levels of privacy. Because BVI has strict privacy laws, the nation protects the confidentiality of business dealings and refrains from sharing information about the beneficial owners or stockholders of a company. The shareholders register and directors of a BVI company are not open to the public. </p>
           <p><strong> Political Stability: </strong>Another justification for establishing a firm in the British Virgin Islands is the country's political stability. A robust legal system and democratic government have contributed to the political stability of the British Virgin Islands. The region has a long history of upholding the rule of law and having a stable administration. This stability is another advantage of registering a business in the British Virgin Islands; it provides business owners with a secure and dependable business environment, encouraging long-term investments and building confidence among international corporate associates. </p>
           <p><strong> Few Requirements: </strong>Another motivation to establish a business in the British Virgin Islands is the minimal maintenance requirements that follow the registration of a BVI corporation. One more advantage of registering a corporation in the British Virgin Islands is that the government does not require corporate entities to file regular financial statements or tax returns. Furthermore, in the BVI, a corporation is not legally required to hold annual meetings upon formation. </p>
           <p><strong> Flexible Regime: </strong>The objectives of a BVI company are unrestricted by BVI law and can be anything they want, as long as they are indicated in the firm's memorandum of association if it is a restricted purpose corporation. The BVI Business Corporations Act gives BVI corporations a great deal of latitude in terms of capital structure, managerial responsibilities, and minimum shareholder participation requirements. </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of Starting a Business in British Virgin Island"
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
