import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/What does not Constitute Trademark Infringement_.svg";
interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
      <p className="main-para">In the following cases, a registered trademark is said to be infringed— If the mark in dispute is identical with or deceptively similar to the registered trademark and is concerning the same or similar goods or services:</p>
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        
        <div className="flex-7">
            <p><strong>1. </strong>If the identical or similar mark can confuse the minds of the general public to have an association with the registered trademark</p>
            <p><strong>2. </strong>If the registered trademark is used as a part of the trade name or business concern for goods and services in respect of which the trademark is registered</p>
            <p><strong>3. </strong>If the trademark is advertised and as a result, it takes unfair advantage or is contrary to the honest practices or is detrimental to the distinctive character and reputation of the registered trademark.</p>
            <p><strong>4. </strong>If the registered trademark is used in the material meant for packaging or labelling of other goods or as a business paper without due authorization of the registered user.</p>
         

        </div>
        <div className="flex-3">
          <Image
            alt="What Constitutes Trademark Infringement"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
      <p className="main-para pt-2">Moreover, if a person wrongfully applies for registration of a trademark as specified in Section 103 which results in trademark infringement then such an applicant shall be punished with imprisonment not less than six months but which may extend to three years along with a fine which shall not be less than fifty thousand rupees but which may extend to two lakh rupees. Furthermore, the section also provides for defence in such instances. </p>
    </div>
  );
};
