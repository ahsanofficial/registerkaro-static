import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/three.svg";
interface HeroProps {
    cityName: string;
}
export const Difference = ({ cityName }: HeroProps) => {
  return (
    <div id="Difference">
        <p className="main-para">Delhi High Court for the first time expounded the difference between passing off and trademark infringement in the landmark case of <strong>Cadbury { cityName } Limited and Ors. v. Neeraj Food Products, 2007</strong> as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong> An action for passing off is a common law remedy whereas an action for trademark infringement is a statutory remedy.</p>
          <p><strong>2. </strong> The use by the defendant of the trademark of the plaintiff is a prerequisite in the case of an action for infringement while it is not an essential feature for passing off.</p>
          <p><strong>3. </strong> To establish infringement concerning a registered trademark, it is only required to prove that the infringing mark is the same or deceptively similar to the registered mark. On the other hand in case of a passing off, only proving that the marks are the same or deceptively similar is not sufficient.</p>
          <p><strong>4. </strong> In a passing-off claim, it is necessary to verify that the use of the trademark by the defendant has caused or is expected to cause injury or damage to the plaintiff’s goodwill.</p>
          <p><strong>5. </strong> Trademark registration is given only for a particular category of goods. Therefore, the protection can only be extended to those goods whereas, in a passing off action, the defendant’s goods need not to be the same or of the same category.</p>


        </div>
        <div className="flex-4">
          <Image
            alt=" the Difference b/w Infringement and Passing Off"
            className="Importance-img-h-100 w-100"
            height={475}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
