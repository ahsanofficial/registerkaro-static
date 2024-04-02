import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/qatar-company-registration/types.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">For establishing a business in Qatar, you may choose one of the following company structure:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Qatar"
              className="Types-img w-100"
              height={1000}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. General Partnership :</strong> A general partnership is a business established by two or more people in which all of the partners share financial responsibility for the partnership's debts.</p>
           <p><strong>2. Simple Partnership :</strong> A basic partnership corporation is made up of the two types of partners where one is Liable Partner and other is a Silent Partner. The Liable Partner manages the business and bears full financial responsibility for all of its debts. However, Partners that have contributed money to the business but are not accountable for its debts beyond their capital shares are known as sleeping or silent partners.</p>
           <p><strong>3. Sole Proprietorship :</strong> When interpreting the terms of this law, a sole proprietorship firm is any business venture in which one single director runs the entire business with all of the capital, therefore, owing the entire responsibility of both profit and loss. In this form,the entity is not considered separate from its directors.</p>
           <p><strong>4. Private Shareholding Company :</strong> A private ownership company may be founded by a minimum of five founding shareholders and won't have its stock listed on a public exchange. The corporation must have a minimum capital of two million Qatari Riyals and the shareholders must subscribe to all the shares of the company. Private shareholding firms are subject to the same regulations as shareholding corporations, with the exception of those pertaining to public subscription, listing, and trading.</p>
           <p><strong>5. Shareholding Company :</strong> Shareholding company is such a company whose shares are divided into equal value and are floated in the market for public purchase. In this form of company, the shareholders are only liable for the amount of shares owned by them, not directly imposing the loss of the company.</p>
           <p><strong>6. Limited Liability Company :</strong> Limited Liability Company holds a minimum of 2 partners with a cap of 50 partners and the partners are only accountable for the amount shared owned by them. Moreover, in LLC, trading of shares is prohibited, therefore, the partners cannot sell the shares without the permission of the board.</p>
           <p><strong>7. Holding Company :</strong> A holding company is a limited liability company, sole proprietorship, or shareholding that controls one or more other firms both financially and administratively. The controlled companies will become subsidiaries of the holding company whenever the holding company owns at least (51%) of the shares or stakes in them.</p>
           <p><strong>8. Foreign Companies- exempted by Ministerial Order :</strong> This kind of company is licensed by a ministerial order issued under Law No. (13) of 2000, which regulates economic operations, and Law No. (13) of 2013, which regulates non-Qatari capital. The company is involved in state contracts where more than 49% of the company's capital is held by non-Qatari entities [exclusive to businesses that have contracts with the state]. Moreover, the other form of company are the Audit firms and bureaus carry out the task of examining and verifying the financial statements of businesses regulated by Law No. (30) of 2004.</p>
        </div>
        
      </div>
    </div>
  );
};
