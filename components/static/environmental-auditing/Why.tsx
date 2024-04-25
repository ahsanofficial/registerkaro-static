import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Why = () => {
  return (
    <div id="WhyReg">
      <p className="main-para">The following are the areas of environmental audit</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        
        <div className="flex-7 pt-2">
          <p><strong>Material Audit :</strong> Checks on the diverse usage of raw materials, the usage of assets, the cost per unit, details of the product, wastage and preservation of the materials, capacity and material waste all these things are checked and considered</p>
          <p><strong>Vitality Audit:</strong> This is meant to check upon the vitality factor of the business, vitality factors include innovation, adaptability, financial status, consumer behaviour, use of technology the updates and the changes related to these</p>
          <p><strong>Water Audit:</strong>In this the usage of water is determined- the amount, the various sources as well as the purpose. How water is brought into any kind of use into the company, where water is used where the water flows and the channel is made and the end consequence it has caused to the environment.</p>
          <p><strong>Human Resources:</strong>This is done for the employees and the workers at various levels of the company. Starting from the workers, it is checked if they are in a hazardous environment and what precautionary measures have been taken to protect them and minimise the risk of them getting affected by the hazardous environment.</p>
          <p><strong>Natural Quality Audit:</strong>Maintaining the quality of everything done at every stage of the development of the product used is important, for the audit as well as the consumer who are associated with them.</p>
          <p><strong>Designing Audit:</strong>Use of innovation in the industry that helps in development in different ways rather than the old traditional methods. Checking on the use of innovation in an industry helps in creation of morden business methodology, if that includes usage of less natural resources or help it anyway, that is a huge bonus point on the assessment results.</p>
          <p><strong>Trash Audit:</strong> This evaluates the amount of trash, wastage of material that the company generates in a given period of time.</p>
          <p><strong>Consistency Audit:</strong> They constitute a part of the overall audit evaluation process, this is conducted as per the guidelines, procedure and the policies that are very industry specific.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="areas of the environment audit"
            className="Importance-img-h-100 w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
