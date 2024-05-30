import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/nbfc-compliances/RBI Master Direction - Prudential Regulation.svg';
interface HeroProps {
    cityName: string;
}
const RBIMasterDirection = ({ cityName }: HeroProps) => {
    return (
        <div id="RBIMasterDirection">
            <p className="main-para">In addition to the aforementioned NBFC compliances, non-banking institutions must also adhere to RBI Master Direction’s Prudential Norms which are as follows:</p>
            <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
                <div className="flex-6">
                    <p><strong>1. Management of Investments :</strong>The Board of Directors (BOD) of NBFCs is mandated to establish and implement the investment policy for the company. This includes criteria for classifying investments into current and long-term categories.</p>
                    <p><strong>2. Aggregation of Multiple NBFCs :</strong>All NBFCs will be collectively assessed to determine compliance with the asset size limit of Rs. 500 crores.</p>
                    <p><strong>3. Prohibition of Loans against Company Shares :</strong>NBFCs are prohibited from extending or receiving credit against their own shares.</p>
                    <p><strong>4. Policy for Demand or Call Loans :</strong>NBFCs seeking to offer Demand or Call Loans must formulate a policy for such transactions. Which should be implemented by the company during such tractions.</p>
                    <p><strong>5. Asset Classification: :</strong> Applicable NBFCs are required to classify their assets into the following categories:</p>
                    <div className="ps-4">
                        <p><strong>a. </strong>Standard Assets</p>
                        <p><strong>b. </strong>Sub-Standard Assets</p>
                        <p><strong>c. </strong>Loss Assets</p>
                        <p><strong>d. </strong>Doubtful Assets</p>
                    </div>
                    <p><strong>6. Balance Sheet Disclosure :</strong>Each Non-Banking Financial Company must include separate provisions in their balance sheet for doubtful or bad debts and depreciation in investments. Additionally, applicable NBFCs must set aside provisions for standard assets at a rate of 0.25% of the outstanding amount.</p>
                </div>
                <div className="flex-4">
                    <Image
                        alt="RBI Master Direction - Prudential Regulation"
                        className="RBIMasterDirection-img w-100 Importance-img-h-100"
                        height={750}
                        loading="lazy"
                        src={bft}
                    />
                </div>
            </div>
        </div>
    );
};


export default RBIMasterDirection;
