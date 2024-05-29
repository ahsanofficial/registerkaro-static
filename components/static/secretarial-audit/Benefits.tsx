import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/secretarial-audit/two.svg";


export const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>A successful method to ensure adherence to the necessary legal and procedural standards.</p>
          <p>Gives directors and Key Managerial Personnel a sense of trust. Secretarial Audit verifies that legal and procedural obligations are met, allowing directors to focus on key business tasks.</p>
          <p>Enhance the company's reputation with regulators and stakeholders. Secretarial Audit serves as an efficient tool for managing governance and compliance risks. Assisting the investor in evaluating companies' adherence to regulations improves their reputation.</p>
          <p>Secretarial Audit is used to confirm that a company is following different laws like the Companies Act, Taxation laws, Labor laws, Environmental laws, etc. This helps the company avoid legal conflicts and fines. Secretarial Audit ensures the protection of stakeholders' interests, such as customers, employees, and society, by verifying compliance with laws and regulations. It guarantees them that the company is behaving in an ethical manner.</p>
          <p>Secretarial Audit guarantees that the company adheres to all relevant laws and regulations. Furthermore, it highlights the occurrences of the company failing to adhere to rules. Overall, it assists the company in implementing corrective actions to prevent future risks and penalties. Hence, a secretarial audit helps in reducing compliance risk.</p>
          <p>Secretarial audit ensures rigorous adherence to ethical business practices. It aids the company in building a positive image and drawing in both investors and customers. The secretarial audit assesses the company's internal control systems for weaknesses or vulnerabilities. This improves the efficiency and effectiveness of the company’s activities.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of Secretarial Auditor"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
