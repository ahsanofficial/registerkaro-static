import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/Types of Trademark Infringement in India.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <p className="main-para">Trademark infringements are of two types, which are as follows:</p>
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        
        <div className="flex-7">
          <div className="flex-5">
            <Image
              alt="Types of Trademark Infringement in India"
              className="Importance-img-h-100 w-100"
              height={300}
              loading="lazy"
              src={dft}
            />
          </div>
            <p><strong>Direct Infringement:</strong> It is further divided into three types:</p>
              <p><strong>1. Similar or Deceptive</strong>  If someone uses a mark which is similar to a registered trademark or has been used in such a way that it deceives or confuses people with the registered trademark, then it is a direct infringement.</p>
              <p><strong>2. Used without Owner's Permission</strong> If someone uses the exact registered mark but without obtaining permission from the owner of the mark, then it amounts to Direct infringement.</p>
              <p><strong>3. Use of a similar trademark in the same class</strong>For constituting direct trademark infringement, the product or service concerned with unauthorized use should also fall under the same class of the registered trademark.</p>

              <p><strong>Indirect Infringement:</strong>  It is also further divided into two types:</p>
              <p><strong>1. Vicarious Infringement:</strong> When a person instead of directly infringing a trademark, controls the actions of some other person who directly infringes it, then it is said to be vicarious infringement.</p>
              <p><strong>2. Contributory Infringement:</strong> When a knowingly contributes or influences the direct infringement then it amounts to contributory infringement.</p>

          
        </div>
       
      </div>
    </div>
  );
};
