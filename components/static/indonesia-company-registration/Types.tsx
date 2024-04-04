import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/indonesia-company-registration/Types_of_Companies.svg"

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are following forms of company structure offered by Irish Laws when it comes to company registration in its land:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Indonesia"
              className="Types-img w-100"
              height={800}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. Perseroan Terbatas: </strong>An organization with limited liability is a Perseroan Terbatas (PT). A PT is a legally recognized organization with shares as its capital because the shareholder's obligations are restricted to the amount of unpaid shares in the company's capital, the owner's personal assets are safeguarded in the event that the business experiences financial difficulties. It is not necessary to dissolve the corporation in order to sell shares or make changes to ownership. They are further divided into two types, Local PT Company and Foreign Owned PTMA Company</p>
           <p><strong>2. Firm [FA]: </strong>A Firma (FA), which is a type of privately held company, can be founded by two or more Indonesian citizens. Due to FA's lack of legal separation from its owners, neither the company's nor the owners' personal assets are protected, and in the event that the business incurs debt, the partners' personal assets will be used to settle the balance.</p>
           <p><strong>3. Commanditaire Vennootschap (CV): </strong>An entity with limited liability is a Commanditaire Vennootschap (CV). Active partners provide funds and oversee the business, whereas quiet partners just contribute capital. There are two categories of partners. A CV is one of the most straightforward entities to establish, and there is no minimum capital needed. A CV does not, however, shield the partners' private assets from other legal entities.</p>
           <p><strong>4. Sole Proprietorship [UD]: </strong>Single-person businesses, or Usaha Dagang is the most basic type of corporation in Indonesia because it just needs one person to manage the enterprise. The owner and single proprietorship are equivalent legal entities. To open a UD, you would require a business license, a residence letter, an employee id number, and the name of the company. </p>
           <p><strong>5. Representative Office: </strong>For international businesses looking to investigate the Indonesian market, setting up a representative office in Indonesia makes sense. The representative office is limited to representing the overseas parent company's purchasing or selling agents, carrying out market research, and organizing promotional events. This company's license is set to expire in two years, and in order to continue doing business in Indonesia, it must be renewed. In Indonesia, the office cannot turn a profit; instead, the foreign parent firm handles all business dealings. Unlike other foreign-owned businesses in Indonesia, there is no minimum capital requirement. Employers from abroad are also permitted to work in representative offices. </p>
           <p><strong>6. Subsidiary Company: </strong>In Indonesia, subsidiaries are incorporated as limited liability companies; if the parent firm is based outside, a foreign-owned company (PT PMA) would be the most suitable structure. A subsidiary business is a distinct legal entity. Entrepreneurs create a subsidiary firm in order to enter the Indonesian market. In addition, it is regarded as a tax resident and will pay 25% corporate tax.</p>
        </div>
        
      </div>
    </div>
  );
};
