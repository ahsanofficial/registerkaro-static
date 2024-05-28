import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/terms-of-use-agreement/Key Clauses to Include in Your Terms of Use Agreement.svg";

export const KeyClauses = () => {
  return (
    <div id="KeyClauses">
      <p className="main-para">These are some of the essential clauses which should be incorporated to meticulously craft the Terms of Use Agreement, which are as follows:</p>
      <div className="KeyClauses flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. Service Scope : </strong>Clearly define the products or services offered by your business. Offer a concise overview of your company's mission or objectives, akin to how prominent organizations elucidate their services to clients.</p>
          <p><strong>2. Amendment Clause : </strong>Incorporate a provision granting your business the authority to revise the agreement. Specify the method of notifying customers about any modifications, particularly in instances such as business changes or amendments to pertinent legislation.</p>
          <p><strong>3. Pricing and Payment Terms : </strong> Inform users about the inclusion or exclusion of taxes in your pricing structure. Specify the currency in which prices are denoted and clarify payment deadlines and acceptable payment methods. Moreover, you can also prescribe the repercussions for non-payment.</p>
          <p><strong>4. Liability Limitation Clause : </strong>Highlight your business's limitation of liability for damages. Clarify that your business disclaims responsibility for inaccurate or invalid information on your platform.</p>
          <p><strong>5. Jurisdiction Clause : </strong>Disclose your business's jurisdictional location and specify the governing laws applicable to your agreement.</p>
          <p><strong>6. Acceptable Use Provision : </strong>Encourage lawful utilization of your platform by defining inappropriate or abusive behaviour or usage clearly. Explain the consequences for breaching the stipulations as well.</p>
          <p><strong>7. User-Generated Content : </strong>If applicable, include a clause addressing user-generated content. Highlight potential risks, such as exposure to unsuitable content or copyright infringement. Specify acceptable content criteria, e.g., content devoid of abusive or derogatory elements. Assert user responsibility for content uploaded and mandate proper ownership or authorization for publication.</p>
          <p><strong>8. Intellectual Property Statement : </strong>Inform users about the intellectual property rights (IPR) possessed by your business. Specify permissible and prohibited actions concerning your IP, such as forbidding alteration or dissemination of site materials.</p>
          <p><strong>9. Termination Provision : </strong>Grant your business the authority to revoke or suspend user accounts and platform access. Define circumstances warranting termination, such as inappropriate usage or offensive conduct.</p>
          <p><strong>10. Contact Information : </strong> Provide users with means to communicate with your company. Include email addresses, postal addresses, and preferably contact numbers.</p>
          
        </div>
        <div className="flex-3">
          <Image
            alt="Key Clauses to Include in Your Terms of Use Agreement"
            className="KeyClauses-img w-100 Importance-img-h-100"
            height={1025}
            loading="lazy"
            src={dft}
          />
        </div>   
      </div>
    </div>
  );
};
