import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const MethodsUsed = () => {
  return (
    <div id='MethodsUsed'>
      <div className="methods-used flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. Comparable Company Analysis (CCA): </strong>This method involves comparing the startup’s metrics with similar companies that have been recently valued or have undergone funding rounds. Factors such as revenue, growth rate, market share, and user base are assessed to derive a valuation estimate.</p>
            <p><strong>2. Discounted Cash Flow (DCF): </strong>DCF estimates the present value of a startup by forecasting its future cash flows and discounting them to their present value. This method requires predicting future revenues, expenses, and growth rates, making it more suitable for startups with a stable operating history.</p>
            <p><strong>3. Market Multiples: </strong>This approach involves using multiples (like price-to-earnings, price-to-sales, etc.) derived from similar public companies to determine the valuation of the startup. Adjustments are made to account for differences between the startup and established companies.</p>
            <p><strong>4. Risk Factor Summation: </strong>This method evaluates various risk factors associated with the startup, including market risk, competition, technology risk, and management risk. Each risk factor is assigned a score, and the cumulative risk score impacts the valuation.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Methods Used for Company Valuation of Startups"
            className="MethodsUsed-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>

      </div>
      
    </div>
  )
}
