import Image from "next/image";
import React from "react";
interface HeroProps {
  cityName: string;
}

export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        <p className="main-para">Classification of a company is done based on several factors:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-7">
            
         <h3>Types of companies based on company incorporation</h3>
         <p>Based on the establishment, companies can be divided into 2 categories.</p>
         <div className="ps-5">
            <p><strong>1. Statutory Companies: </strong> These are companies that have been incorporated under a unique parliamentary or state legislative act. This kind of company’s main objective is to serve the public interest. The Companies Act 2013 has limited applicability to them because they are constituted under a different statute. The Special Act applicable to the situation will take precedence over The Companies Act, 2013 in the event of a dispute.</p>
            <p><strong>2. Registered Companies: </strong> Companies that have been registered by the Companies Act 2013 or a prior version of the Companies Act are referred to as registered companies. When a company receives a certificate of incorporation (ROC), it becomes this type of company.</p>
         </div>

         <h3>Companies based on Liabilities</h3>
         <div className="ps-5">
                <p><strong>1. Companies Limited by Shares: </strong> These companies issue their shares to the public through initial public offerings (IPOs). These companies are referred to as limited companies in {cityName} and public limited companies (PLCs), or “Inc” in the United States, in the commonwealth countries, and in Great Britain.</p>
                <p><strong>2. Companies Limited by Guarantee: </strong> In some cases, the memorandum of association (MoA) of a business stipulates the quantities of capital that certain members commit to pay. They will only be required to make the promised payment if the business is dissolved. <br />Example: Clubs, sports groups, workers’ cooperatives, student unions, and non-governmental organizations (NGOs) are examples of companies that can establish guarantee companies because they do not split their assets into shares or give earnings to their members.</p>
                <p><strong>3. Unlimited Companies: </strong>It’s a form of private company. Members of unlimited companies have no limits on their liabilities. As a result, while the corporation is winding up, it can take all of the shareholders’ assets to pay off its debts. Their duties will cover the company’s whole debt.</p>
                </div>
        <h3>Companies based on Members</h3>
        <div className="ps-5">
            <p><strong>1. One-Person Companies (OPCs):</strong>  As the name implies, the shareholders of these businesses are only one person. This person may also serve as the company’s director. These are distinct from sole proprietorships in that they are separate legal entities from their sole members. It does not require a minimum share capital requirement. <br />Minimum number of directors- 1 <br />Maximum number of directors- 15</p>
            <p><strong>2. Private Companies: </strong>The articles of association (AoA) of private companies prohibit share transferability; members (shareholders) cannot transfer their shares for free, and these members can include both present and former employees who own shares. There must also be at least two members and not more than 200 members. <br />Minimum number of directors- 2<br />Maximum number of directors- 15</p>
            <p><strong>3. Public Companies: </strong>In contrast to private companies, public companies allow their members (Shareholders) to freely transfer shares. These companies must have a minimum of 7 members and a maximum of unlimited members. The general public can hold company shares. <br />Minimum number of directors- 3 <br />Maximum number of directors- No limit</p>
        </div>
        <h3>Companies on the Basis of Control</h3>
            <div className="ps-5">
                <p><strong>1. Holding and Subsidiary Companies: </strong> There are instances where a company’s shares are wholly or substantially owned by another company. The holding company, often known as the parent company, is the present owner of these shares. Similar to this, a subsidiary is a company that the parent company holds shares of. <br />Example: Tata Sons Limited (the owner of the Tata name & the trademarks) is the holding company of the Tata Group and holds the bulk of shareholding in these companies.</p>
                <p><strong>2. Associate Companies: </strong>  Associate companies are ones in which other businesses have a substantial influence, but which are not subsidiaries. In order to have a “significant influence,” you must own at least 20% of the shares of the associated company. <br />Example: Joint Venture Company</p>
            </div>
        <h3>Companies Based on Size</h3>
        <p>The MSME Act divides companies into size-based categories so that the government can offer MSMEs benefits. What separates them is as follows:</p>
        <div className="ps-5">
            <p><strong>1. Micro Companies: </strong>These are companies with yearly sales under Rs. 5 crore and plant and machinery investments under Rs. 1 crore.</p>
            <p><strong>2. Small Companies: </strong>Small Companies are established under the Companies Act 2013, which aims to foster economic growth and create jobs for the general public.  According to the Companies Act, a business is classified as small if its maximum paid-up share capital is Rs. 4 crore and its maximum turnover is Rs. 40 crore. The Companies Act of 2013 confers certain advantages for these companies.</p>
            <p><strong>3. Small and Medium-sized Companies: </strong>It refers to an unlisted company (private or public) that is not a bank/financial institution or insurance company and has a turnover and borrowings of less than INR 250 crore and INR 50 crore, respectively.</p>
            <h4>Types of Companies in {cityName} Based on Residence</h4>
            <p><strong>4. Foreign companies: /</strong> According to Section 2(42) of the Companies Act, 2013, a “foreign company” is a company or body corporate that has a place of business or does business in {cityName} (either directly or through an agent). This form of company is subject to the provisions specified in Sections 379-393.</p>
            <p><strong>5. Indian companies: </strong>This pertains to companies incorporated and registered in {cityName}. It is an umbrella phrase that encompasses practically all other types of companies.</p>
        </div>
        <h3>Other Types of Companies</h3>
        <div className="ps-5">
            <p><strong>1. Government Companies :</strong> These are companies in which the central or state governments possess more than 50% of the stock or are jointly owned by both governments.</p>
            <p><strong>2. Charitable Companies (Section 8) :</strong> Charitable companies are organizations with charitable aims, sometimes known as non-profits. These companies are also known as Section 8 companies because they are registered under the Companies Act 2013. They work to promote religion, arts, culture, science, education, commerce, and many other things. Remember that they do not pay their members since they do not make any profits.</p>
            <p><strong>3. Dormant Companies :</strong> These companies are set up to work on forthcoming endeavors. They don’t have a lot of accounting transactions, and they don’t have to go by all the rules that conventional businesses must.</p>
        </div>
        
 
        </div>
       
      </div>
    </div>
  );
};

export default Types;


