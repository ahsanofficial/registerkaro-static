import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const FactorsAffectingValuation = () => {
  return (
    <div id='FactorsAffectingValuation'>
      <div className="factors-affecting-valuation flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
            <Image
              alt="Factors Affecting Company Valuation for Startups in India"
              className="FactorsAffectingValuation-img w-100"
              height={480}
              loading="lazy"
              src={bft}
            />
        </div>
        <div className="flex-7">
          <ol>
            <li><strong>Market Potential: </strong>Investors assess the startup’s addressable market size, growth potential, and scalability within the Indian market. India’s growing population and increasing consumer demand in various sectors like technology, e-commerce, healthcare, and FinTech influence valuation.</li>
            <li><strong>Revenue and Growth Trajectory: </strong>Startups with a proven revenue model, consistent growth, and a predictable revenue stream tend to have higher valuations. High growth rates often positively impact valuations, demonstrating the potential for future returns.</li>
            <li><strong>Technology and Innovation: </strong>Innovative technologies, unique business models, patents, or proprietary technologies can significantly impact valuations in India’s competitive startup landscape.</li>
            <li><strong>Team and Execution: </strong>The startup team’s expertise, experience, and ability to execute the business plan are crucial factors influencing valuation. A strong, skilled team often attracts higher valuations.</li>
            <li><strong>Funding Round and Investor Sentiment: </strong>Previous funding rounds, investor interest, and market sentiment also influence startup valuations. Successful funding rounds or endorsements from reputable investors can positively impact valuations.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}