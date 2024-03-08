import React from "react";
import Image from 'next/image'
import advantages_of_obtaining_bis_certification from '../../../assets/images/static/bis-certification/quality-control.svg'



interface HeroProps {
  cityName: string;
}
export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise  m-auto' id='PartnershipDeed'>
   
      <div className='benefits flex w-80 m-auto mobile-flex-column' >
      <div className='flex-4 mt-5'>
          <Image alt=" BIS, functioning as the National Standards Body in , actively
        engages in Conformity Assessment, Standardization, and Quality Assurance
        across various domains, including goods, services, processes, and
        systems. The Indian Standards formulated by BIS serve as the foundation" className="AdvantagesBIS-img w-100" height={600} loading="lazy" src={advantages_of_obtaining_bis_certification} />
          </div>
        <div className="flex-7">
      <p className="main-para my-2" >
        BIS, functioning as the National Standards Body in {cityName}, actively
        engages in Conformity Assessment, Standardization, and Quality Assurance
        across various domains, including goods, services, processes, and
        systems. The Indian Standards formulated by BIS serve as the foundation
        for Product Certification Schemes. These schemes play a crucial role in
        providing third-party assurance of product safety, quality, and
        reliability to consumers.
      </p>
      <p className="main-para my-4">
        While the BIS certification scheme is predominantly voluntary, certain
        products are subjected to mandatory compliance with Indian standards by
        the Indian Government. This compulsion is driven by considerations such
        as public interest, human, animal, or plant safety, environmental
        protection, prevention of unfair trade practices, and national security.
        For such products, the Indian Government mandates the usage of the
        Standard Mark under the Certificate of Conformity (CoC) or License
        issued by BIS through the issuance of Quality Control Orders (QCOs).
      </p>
      <p className="main-para my-2">
        The Central Government of {cityName}, in consultation with BIS,
        exercises its powers under Sections 16, 17, and 25 of the BIS Act, 2016,
        to publish Quality Control Orders. This regulatory measure makes it
        obligatory for products falling under the purview of these orders to
        undergo BIS Certification, thereby ensuring adherence to established
        standards and promoting consumer safety and satisfaction.
      </p>
      </div>
      </div>
    </div>
  );
};
