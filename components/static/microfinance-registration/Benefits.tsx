import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/Benefits of Microfinancing_.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Benefits of Microfinancing"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li><strong>Accessibility: </strong>Microfinancing offers small loans to individuals without significant assets, who may be unable to secure traditional bank loans.</li>
            <li><strong>Poverty Alleviation: </strong>Even modest credit amounts can help break the poverty cycle, fostering opportunities for education and job creation.</li>
            <li><strong>Education and Employment Opportunities: </strong>Microfinancing encourages families to keep children in school and facilitates small business creation, leading to job generation.</li>
            <li><strong>Improved Standard of Living: </strong>Microfinance initiatives aim to enhance living standards in impoverished communities by providing financial assistance and fostering economic growth.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
