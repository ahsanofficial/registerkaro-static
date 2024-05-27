import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/terms-of-use-agreement/Importance of Terms of Use Agreements for Organisations.svg";

export const Importance = () => {
  return (
    <div id="Importance">
      <p className="main-para">Such an agreement is essential as it acts as a legally binding contract encompassing significant aspects such as privacy policies, data management practices and similar actions. Some of the key functions of this agreement include:</p>
      <div className="Importance flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. Enforcing Policies : </strong>The agreement allows the website to enforce its policies and take necessary actions in cases of policy violations or other breaches.</p>
          <p><strong>2. Service Withdrawal : </strong>It clarifies that the website has the authority to withdraw or cancel services to a particular user if they violate the policies or engage in prohibited activities..</p>
          <p><strong>3. Account Disabling : </strong>The agreement outlines the conditions under which user accounts may be disabled, such as repeated offences or the detection of malicious or harmful actions.</p>
          <p><strong>4. Managing Customer Expectations : </strong> It helps in setting clear expectations for customers regarding the functionality and outcomes of the services provided by the website.</p>
          <p><strong>5. Defining Rules of Conduct : </strong>The agreement establishes rules for customer behaviour, prohibiting actions such as malicious activities, hateful comments, hate speech and other forms of harmful behaviour.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Importance of Terms of Use Agreements for Organisations"
            className="Importance-img w-100 Importance-img-h-100"
            height={375}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
      <p className="main-para">Therefore by putting a well-crafted Terms of Use agreement in place, organisations can protect themselves, manage user expectations and maintain a safe and compliant business environment.</p>
    </div>
  );
};
