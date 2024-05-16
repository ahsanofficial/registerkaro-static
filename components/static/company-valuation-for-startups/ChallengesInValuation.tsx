import React from 'react'
import bft from '../../../assets/images/static/company-valuation-for-startups/Challenges in Startup Valuation.svg'
import Image from 'next/image'

export const ChallengesInValuation = () => {
  return (
    <div id='ChallengesInValuation'>
      <div className="challenges-in-valuation flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Methods Used for Company Valuation of Startups"
            className="ChangesInValuation-img w-100"
            height={290}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Lack of Comparable Data: </strong>India’s startup ecosystem is diverse and constantly evolving, making it challenging to find comparable data for valuation analysis.</p>
          <p><strong>2. Regulatory Environment: </strong>Shifting regulations and compliance issues in India can affect valuations, especially in sectors like FinTech and Healthcare.</p>
          <p><strong>3. Subjectivity in Valuation: </strong>Valuation involves a degree of subjectivity, leading to varying opinions among investors and stakeholders.</p>
          <p><strong>4. Market Volatility: </strong>Economic fluctuations, market uncertainties, and geopolitical factors can impact startup valuations in India.</p>
          
        </div>
      </div>
      <p className='main-para'>In short company valuation for startups in India involves a blend of quantitative analysis, market assessment, and qualitative judgments. Understanding the methodologies, market dynamics, and influencing factors is crucial for startups seeking funding and investors evaluating potential investment opportunities in India’s vibrant startup ecosystem.</p>
      
    </div>
  )
}
