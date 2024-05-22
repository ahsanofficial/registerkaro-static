import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/petroleum-and-explosive-safety-organisation/Documents Required.svg";
interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        
        <div className="flex-6">
            <p><strong>1 . </strong>Incorporation papers of the business</p>
            <p><strong>2 . </strong>Licenses of the business</p>
            <p><strong>3 . </strong>Product ATEX/IECEx Certificates</p>
            <p><strong>4 . </strong>Test reports of the products</p>
            <p><strong>5 . </strong>Commercial details related to the business </p>
            <p><strong>6 . </strong>List of production equipment and test instrument</p>
            <p><strong>7 . </strong>ISO Certification of the business</p>
            <p><strong>8 . </strong>Evidence of facility of production</p>


        </div>
        <div className="flex-4">
          <Image
            alt="Documents you would need"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
