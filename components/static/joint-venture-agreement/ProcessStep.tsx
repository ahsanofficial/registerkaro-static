import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/joint-venture-agreement/How to Register a Joint.svg";
interface HeroProps {
    cityName: string;
}
export const ProcessStep = ({ cityName }: HeroProps) => {
  return (
    <div id="ProcessStep">
        <p className="main-para">To register a joint venture agreement in {cityName}, you need to follow these steps: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 pt-5">
        <Image
            alt="How to Register a Joint Venture Agreement in India?
            "
            className="Benefits-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center pt-5">
            <ol className="fs-5">
              <li>Choose a suitable legal structure for your joint venture, such as a partnership, a limited liability partnership, a private limited company, or a public limited company. Each structure has its own advantages and disadvantages, depending on the nature and size of your joint venture. You can consult a legal expert to help you decide the best option for your joint venture.</li>
              <li>Draft a joint venture agreement that covers all the essential aspects of your joint venture, such as the name, objectives, duration, capital contribution, profit and loss sharing, management and control, intellectual property rights, confidentiality, dispute resolution, and termination clauses. You can use a standard template or customize it according to your specific needs. You can also seek professional assistance from RegisterKaro to draft a comprehensive and legally valid joint venture agreement.</li>
              <li>Register your joint venture agreement with the relevant authorities, such as the Registrar of Companies, the Registrar of Firms, the Income Tax Department, the Goods and Services Tax Department, and the Foreign Exchange Management Act. The registration process and requirements may vary depending on the legal structure and nature of your joint venture. You can also avail the services of RegisterKaro to handle the registration process smoothly and efficiently.</li>
              <li>Start your joint venture operations and comply with the applicable laws and regulations, such as the Companies Act, the Partnership Act, the Income Tax Act, the Goods and Services Tax Act, the Foreign Exchange Management Act, and the Contract Act. You should also maintain proper records and accounts of your joint venture activities and file the necessary returns and reports with the authorities. You can also rely on RegisterKaro to take care of your accounting and compliance needs.</li>
            </ol>
        </div>
      </div>
    </div>
  );
};
