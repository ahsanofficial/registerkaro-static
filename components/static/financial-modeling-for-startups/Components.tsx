import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Components = () => {
  return (
    <div id="Components">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Components of starting a Business in Qatar"
            className="Importance-img-h-100 w-100"
            height={890}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 ">
           <p className='pt-5'><strong>1. Revenue Projections: </strong>Estimating revenue streams is fundamental. Startups need to analyze market size, competition, pricing strategies, and sales projections to forecast revenues accurately.</p>
           <p className='pt-5'><strong>2. Expense Forecasting: </strong>Predicting various costs, including operating expenses, marketing, salaries, research, and development, is essential. This involves understanding cost structures and industry benchmarks.</p>
           <p className='pt-5'><strong>3. Cash Flow Statements: </strong>Cash flow projections ensure a startup can meet its financial obligations. It involves tracking cash inflows and outflows to maintain operational stability.</p>
           <p className='pt-5'><strong>4. Profit & Loss (P&L) Statements: </strong>P&L projections indicate the company’s profitability over a specific period by comparing revenues and expenses.</p>
           <p className='pt-5'><strong>5. Balance Sheet Modeling: </strong>It represents a company’s financial position, detailing assets, liabilities, and equity. It’s crucial for understanding solvency and funding needs.</p>
           <p className='pt-5'><strong>6. Income Statement: </strong>It’s an integral element of the financial modeling process. For accuracy, one must first determine the EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortisation).</p>
           <p className='pt-5'><strong>7. Balance Sheet: </strong>It contains details of the assets & liabilities of a Startup. In Addition, it shows an image of a Company’s Financial Position at the end of the reporting period.</p>
           
           
        </div>
        
      </div>
    </div>
  );
};
