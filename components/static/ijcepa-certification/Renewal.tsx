import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Renewal = () => {
  return (
    <div id="Renewal">
      <p className="main-para">
        The Validity of an IEC code is also one year. It is mandatory to update
        the details of the IEC every year. Even if there are no updates, then
        also it needs to be confirmed through DGFT’s online portal. Failing to
        do so may result in deactivation of your IEC. RegisterKaro has been the
        ultimate solution for obtaining IJCEPA Certification due to its wide
        array of benefits including:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Import Export Code Validity and Renewal"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li>
                <strong>Expert Team: </strong>RegisterKaro boasts a diverse team of experts from around the globe, specializing in IJCEPA Certification services. Our expert team ensures that your requirements are efficiently addressed.
            </li>
            <li>
                <strong>Affordability: </strong>RegisterKaro offers premium-quality WPC Certificate registration services at competitive rates, ensuring that clients receive top-notch service without straining their budget.
            </li>
            <li>
                <strong>Client-Centric Approach: </strong>Our team is trained to prioritize the needs of our clients, ensuring that the entire process is tailored to meet their business requirements and satisfaction.
            </li>
            <li>
                <strong>Building Trust: </strong>RegisterKaro is dedicated to building trust with its clients, which has allowed us to establish a strong presence in the global marketplace.
            </li>
            <li>
                <strong>Trusted by 10,000+ Clients: </strong>With over 10,000 satisfied clients who have utilized our WPC certificate registration services, RegisterKaro has earned a reputation for quality and reliability over time.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
