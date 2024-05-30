import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/terms-of-use-agreement/Advantages of Terms of Use Agreement.svg";
interface HeroProps {
    cityName: string;
}
export const Advantages = ({ cityName }: HeroProps) => {
  return (
    <div id="Advantages">
      <p className="main-para">A well-crafted Terms of Use Agreement offers numerous benefits such as:</p>
      <div className="Advantages flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Advantages of Terms of Use Agreement"
            className="Advantages-img w-100 Importance-img-h-100"
            height={775}
            loading="lazy"
            src={dft}
          />
        </div>   
        <div className="flex-7">
          <p><strong>1. Clarity in Obligations : </strong>The agreement enables you to establish the appropriate set of obligations for both customers and your business.</p>
          <p><strong>2. Transparent Payment Policies : </strong>You can delineate and elucidate payment terms, ensuring transparency for your clientele.</p>
          <p><strong>3. Protection of Intellectual Property : </strong>The agreement serves as a mechanism to safeguard your intellectual property rights by specifying permissible and impermissible actions concerning your IP by users.</p>
          <p><strong>4. Mitigation of Liability : </strong>Through the inclusion of pertinent clauses, you can mitigate your business's liability and shield it from potential damages.</p>
          <p><strong>5. Inclusion of Legally Mandated Disclosures : </strong>The agreement permits you to incorporate any legally required disclosures, ensuring adherence to laws and regulations enforce.</p>
          <p><strong>6. Establishment of a Legal Framework : </strong>A Terms and Conditions agreement furnishes a legal framework for your business-customer relationship, defining expectations and rights for both parties.</p>
          <p><strong>7. Reduction of Misinterpretations : </strong>The agreement aids in averting inadvertent breaches and misinterpretations between your business and clientele by clearly articulating the terms and conditions.</p>
          <p><strong>8. Augmentation of Trust and Credibility : </strong>Showcasing a well-composed and comprehensive agreement instils trust, underscoring professionalism and dedication to transparency.</p>
          <p><strong>9. Clarification of Non-compliance Consequences : </strong>You can elucidate the repercussions of non-compliance with the agreement's terms, thereby aiding in upholding order and safeguarding your business.</p>
          
        </div>
      </div>
    </div>
  );
};
