import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const ReasonsForChanging = () => {
  return (
    <div id="ReasonsForChanging">
      <p className="main-para">Following are the reasons why businesses might consider a change in the object clause of their contracts,  or the Memorandum of Association(MoA) which acts as the Constitution of the Company, can also be defined as the document to which the operations of the company must adhere and it contains multiple clauses like object clause which have their purpose of defining certain things in the MoA.  MoA’s object clause changes when there is a change in a huge thing that affects the business and a contract’s object clause change happens when a company has entered into a contract with third-party for some project, supply of material or any other purpose, and the MoA of the company changes.</p>
      <div className="reasonsForChanging flex w-80 m-auto mobile-flex-column-reverse">        
        <div className="flex-7">
          <p><strong>1. Expansion or change in business terms: </strong>Whenever a business comes into existence there, it changes, which occurs in terms of expansion, change in terms of the business, feeling the need to change in the MoA. With expansion comes change in terms of the business methodology, the team that operates the business, and important members of the team. There is a high probability, that a change in the object clause might be needed.</p>
          <p><strong>2. Product/Service shift: </strong>With the change in times, businesses might consider a change in their product/ services which acts as their selling point, this constitutes the main objective or the main part of the business. When the product changes, the objective for which the company was formed also changes or the objective for which a person or a third party enters into a contract changes. Hence, another scenario where a change in the object clause might be considered.</p>
          <p><strong>3. Strategy change: </strong>With changes in times, businesses might change the strategy on which they are operating. Strategy change mostly comes out of a situation of need, whenever there is business change. Hence, in these cases, businesses might need to change in object clauses in their MoA and the contracts the company have entered into their third parties.</p>
          <p><strong>4. Change in members: </strong>Change in normal members of the company does not affect the company in a major way, in those cases, change in object clauses cannot be considered. But with business changes, there is a probability that members, key managerial persons or important people, and decision-makers of the business change. The addition or removal of partners might also be considered. Hence, changes in important members related to the company can lead to changes in the object clause of the company,</p>
          <p><strong>5. Change in the laws, which leads to change in compliance: </strong>Laws are ever-changing, so the compliance related to it changes. The compliances the company must adhere to also might change drastically due to changes in the laws. In huge compliance changes, the object clause in the MoA of the company might also be changed.</p>
          <p><strong>6. Dispute Resolution or Restructuring: </strong>Disputes are not anticipated by businesses, in most cases they happen due to the rise of certain circumstances when everyone is in the race to protect their interests. In cases of huge disputes within the company, or of the company with someone else to an extent that changes the course of business of the company or leads to a restructuring of the company in terms of shareholding pattern, business structure, the strategy of conducting the business, product/service change then this might lead to a change in object clauses.</p>
          <p><strong>7. Rebranding: </strong>The brand gives the identity of the company, with changes in the business or any important aspect related to the company. With any changes related to the important aspect of the company, the company may be rebranded and its identity, identity is one of the most important factors related to the company in the digital age. With the change in branding or rebranding, there might be changes in the object clause of the company’s MoA or there might be changes in the IP-related clauses of the contracts, mainly trademarks entered into by the company with third parties.</p>
          <p><strong>8. Periodic Contract Review: </strong>There are multiple things in a company that get reviewed annually. All the important aspects of the company, be it annual filing, turnover, business methodology and many other things that key managerial persons related to the company may consider and this might lead to certain changes in the company, to make the change official as well as make it legally binding upon the members associated with the company.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Reasons for changing the object clause"
            className="ReasonsForChanging-img w-100 Importance-img-h-100"
            height={1350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
