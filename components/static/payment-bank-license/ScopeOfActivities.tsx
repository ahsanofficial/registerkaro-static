import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/payment-bank-license/Scope of Activities After Obtaining Payment Bank License.svg";

export const ScopeOfActivities = () => {
  return (
    <div id="ScopeOfActivities">
      <p className="main-para">Once a Payments Bank secures its license, it's allowed to establish its outlets, including branches, Automated Teller Machines (ATMs), and Business Correspondents (BCs). These outlets can only engage in specific activities permitted by the Banking Regulation Act, 1949. The activities which may be performed by such banks are as follows:</p>
      <div className="ScopeOfActivities flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. Accept Deposits : </strong>Payments Banks can accept deposits like current deposits and savings bank deposits from individuals, small businesses, and other entities allowed by law. They must conduct their own Know Your Customer (KYC), Anti-Money Laundering (AML), and Combating the Financing of Terrorism (CFT) exercises, just like any other bank.</p>
          <p><strong>2. Issue ATM/Debit Cards : </strong>Although Payments Banks can issue ATM/debit cards, they cannot issue credit cards.</p>
          <p><strong>3. Provide Payment and Remittance Services : </strong>Payments Banks can offer payment and remittance services through various channels such as branches, ATMs, BCs, and mobile banking. This includes accepting funds and making payments through branches, BCs, and ATMs.</p>
          <p><strong>4. Issue Prepaid Payment Instruments (PPIs) : </strong>Payments Banks can issue Prepaid Payment Instruments as per instructions issued under the Payment and Settlement Systems (PSS) Act, 2007.</p>
          <p><strong>5. Offer Internet Banking : </strong>RBI permits Payments Banks to provide Internet banking services.</p>
          <p><strong>6. Act as Business Correspondents (BCs) : </strong>Payments Banks can function as BCs of other banks, following RBI guidelines on BCs.</p>
          <p><strong>7. Handle Cross-Border Remittances : </strong> Payments Banks can manage cross-border remittances for personal payments or remittances on current accounts. RBI facilitates facilities or approvals for such transactions in foreign exchange upon application.</p>
          <p><strong>8. Provide Other Financial Services : </strong>Payments Banks can engage in non-risk sharing simple financial services activities like distributing mutual fund units, pension products, insurance products, etc., with prior approval from RBI and compliance with sector regulator requirements.</p>
          <p><strong>9. Facilitate Utility Bill Payments : </strong>Payments Banks can collect utility bill payments on behalf of their customers and the general public.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Scope of Activities After Obtaining Payment Bank License"
            className="ScopeOfActivities-img w-100 Importance-img-h-100"
            height={875}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>

      <p className="main-para">However, Payment Banks are prohibited from forming subsidiaries for non-banking financial services activities. Moreover, to ensure clarity and distinguishability from other banks, they are required to include the term "Payments Bank" in their name.</p>
      <p className="main-para">At RegisterKaro, we understand the complexities and challenges involved in obtaining a Payment Bank License. That's why we're here to offer you hassle-free and quick solutions. With our team of expert professionals boasting vast experience in the field, you can rest assured that your journey towards securing a Payment Bank License will be smooth and efficient. Our affordable prices and tailor-made solutions cater to your specific needs, ensuring that you get the best value for your investment.</p>
      <p className="main-para">With the trust of over 10,000 satisfied clients who have availed of our services, we stand as industry leaders in providing expert assistance for Payment Bank License acquisition. Choosing RegisterKaro means choosing excellence, reliability, and peace of mind. Let us guide you through the intricate process of obtaining your Payment Bank License, so you can focus on what truly matters – building a successful banking venture.</p>
    </div>
  );
};
