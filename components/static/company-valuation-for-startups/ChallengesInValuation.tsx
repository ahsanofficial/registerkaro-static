import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'
import Image from 'next/image'

export const ChallengesInValuation = () => {
  return (
    <div id='ChallengesInValuation'>
      <div className="challenges-in-valuation flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <ol>
            <li><strong>Lack of Comparable Data: </strong>India’s startup ecosystem is diverse and constantly evolving, making it challenging to find comparable data for valuation analysis.</li>
            <li><strong>Regulatory Environment: </strong>Shifting regulations and compliance issues in India can affect valuations, especially in sectors like FinTech and Healthcare.</li>
            <li><strong>Subjectivity in Valuation: </strong>Valuation involves a degree of subjectivity, leading to varying opinions among investors and stakeholders.</li>
            <li><strong>Market Volatility: </strong>Economic fluctuations, market uncertainties, and geopolitical factors can impact startup valuations in India.</li>
          </ol>
          <p>In short company valuation for startups in India involves a blend of quantitative analysis, market assessment, and qualitative judgments. Understanding the methodologies, market dynamics, and influencing factors is crucial for startups seeking funding and investors evaluating potential investment opportunities in India’s vibrant startup ecosystem.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Methods Used for Company Valuation of Startups"
            className="ChangesInValuation-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      
    </div>
  )
}
