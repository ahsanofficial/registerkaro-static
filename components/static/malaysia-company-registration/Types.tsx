import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/malaysia-company-registration/Types_of_Companies.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Following are certain form of company structures available under Malaysian Legislation:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Companies in Malaysia"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. Sole Proprietorship: /</strong>In this form of business, the operations are run by one person called sole proprietor who are not considered to be separate from the entities. This means that the sole proprietor is responsible for all the activities taking place in the business, and the resulting profit and loss, therefore, his personal asset can also be subject to liability, if required. It is important to note that only the permanent resident and Malaysian citizen can register this form of business. Moreover, to renew the same every year, you have to pay a certain amount of fee to Suruhanjaya Syarikat Malaysia.</p>
           <p><strong>2. Partnership: /</strong>There must be at least two partners with the maximum cap of 20 in one partnership firm. The firm must have a partnership deed concluded between the partners which lay down the rules of operating the business such the rules, obligations, liabilities, profits sharing and losses. The firm is not liable for any taxes in the name of business, but the partners are eligible on their individual income. This form is an extension of sole proprietorship with the number of people coming together to trade.</p>
           <p><strong>3. Companies Limited by Shares: /</strong>A company limited by shares can either be a private limited company or a public limited company and does not hold more than 50 shareholders on deck. It is particularly not allowed to float its shares to public domain and even transfer of shares is also subject to allowance by the board collectively. As a result, this company also does not list itself on the stock exchange for public purchase.</p>
           <p><strong>4. Companies Limited by Guarantee: /</strong>As this form is quite similar to that of LLC, similarly, members also have limited responsibility, but do hold restricted liabilities which are guarantee-bound. Stated differently, guaranteed contributions must be more than fixed obligations. Charity organizations and foundations are examples of non-profit organizations that frequently use this type of corporate structure.</p>
           <p><strong>5. Unlimited Companies: /</strong>Members and shareholders of an unlimited company have infinite responsibility. The shareholders and members will bear personal liability in the event of any loss or debt incurred by the company. If an unlimited company passes a special resolution and files a notice of conversion with the SSM, it may become a limited company.</p>
           <p><strong>6. Limited Liability Partnership: /</strong>An LLP is the combination of partnership and a company, which calls for two or more partners to come together to run a business. However, the liability of the partners is limited to the amount contributed by them. Therefore, they are considered separate from the company itself and cannot be held liable for any business debts beyond that.</p>
           <p><strong>7. Cooperative: /</strong>Increasing the economic relevance of its members in line with cooperative principles is the goal of a co-operative organization. In order to acquire information and guidance on the establishment and registration of co-ops, any group of people wishing to organize one should first get in touch with the Suruhanjaya Koperasi Malaysia (SKM) in their various regions.</p>
        </div>
        
      </div>
    </div>
  );
};
