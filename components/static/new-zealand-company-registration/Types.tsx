import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/new-zealand-company-registration/Types_of_companies.svg"

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">New Zealand offers different forms of business structures when it comes to company registration under its jurisdiction. Few of such business structures are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in New Zealand"
              className="Types-img w-100"
              height={1000}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 : Limited Liability Company: </strong> A limited liability company, is a distinct legal entity from its stockholders where 100% of its shares can be owned by foreign nationals. Only the amount of capital contributions made by shareholders to the company will be held against them. With just $1 in share capital, this organization can be formed with one shareholder, one director, and one resident director who resides in New Zealand [they must be a real person] The articles of incorporation, also referred to as the "constitution" in New Zealand, and the law must be followed by the director in carrying out their obligations. </p>
           <p><strong>2 : Public Limited Company: </strong> Similar to a limited liability corporation is a public limited business which comes into picture when a business intends to raise money through the private or public issuing of shares to support its operations. The company's charter is amended to permit the issuance of new shares, creating this kind of structure. Other than what the limited liability company rules already allow, there are no extra administrative or financial requirements.</p>
           <p><strong>3 : Look Through Company: </strong> In New Zealand, a look through company is a type of corporate entity that resembles a limited liability company with a cap of maximum five individual shareholders where at least one director must reside in Australia or New Zealand. The business must provide a public register with information about its directors and shareholders. In order to obtain a legitimate tax exemption, the firm must also file a certain form with the New Zealand Tax Department. The profits made by the business must be included by the owners in their personal income.</p>
           <p><strong>4 : Limited Partnership: </strong> When a business already has a local partner who is prepared to act as a general partner, a limited partnership in New Zealand may be a good choice. In order to create this kind of corporation, the business needs to have a minimum of two partners, one of whom will act as a general partner with unlimited liability for the company's losses. Only the sum of their contributions to the partnership remains accountable for the remaining limited partners. At the conclusion of the partnership's fiscal year, all profits earned via the partnership are divided among the partners and are taxable as income. </p>
           <p><strong>5 : Foreign Trust: </strong> A foreign trust can also be used to create a corporate company in New Zealand. Through the use of this mechanism, the appointed trustee, who oversees the trust's assets and makes decisions based on the instructions provided by the beneficiaries who receive the trust's revenues, can transfer assets such as real estate, shares, securities, and expensive property. Establishing a private trustee business that raises and invests money while offering customers wealth management services is an additional choice. Since this kind of company is completely immune from taxes as long as the revenue it generates isn't given to the beneficiaries of the trust, it can help lower taxes on foreign investments. </p>
           <p><strong>6 : Branch Office: </strong> When a company operates in a highly regulated sector, like banking, financial services, or insurance, it may decide to open a branch office. In New Zealand, this kind of organization can be established with a corporate bank account and an autonomous management staff. In this form, it is necessary to have a resident administrative agent and a registered address where an annual update on the specific details of the branch must be sent by the company to the corporate registration. Additionally, it needs to submit yearly audited financial statements that cover both the parent company's and the branch's accounts. </p>
        </div>
        
      </div>
    </div>
  );
};
