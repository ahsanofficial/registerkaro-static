import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Difference between Foreign Branch and Subsidiary.svg";


export const Difference = () => {
  return (
    <div id="Difference">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Difference between Foreign Branch and Subsidiary"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <p>
            A foreign branch functions as an extension of its parent company in another country, while a subsidiary company operates as a distinct legal entity in a foreign jurisdiction. The foreign branch is wholly owned and managed by the parent company, serving as an expansion of its operations abroad. However, it has limitations in terms of sourcing human resources, usually relying on employees from its home country or through contracted agencies. On the other hand, a foreign subsidiary company is an independent entity, owned and operated separately from its parent company. It must comply with the legal and tax regulations of the country where it is registered. Importantly, the parent company enjoys legal protection from any lawsuits or liabilities faced by the subsidiary company.
          </p>
        </div>
      </div>
    </div>
  );
};
