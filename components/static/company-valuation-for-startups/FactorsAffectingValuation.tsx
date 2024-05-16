import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/company-valuation-for-startups/Factors Affecting Company.svg'

export const FactorsAffectingValuation = () => {
  return (
    <div id='FactorsAffectingValuation'>
      <div className="factors-affecting-valuation flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7">
          <p><strong>1. Market Potential: </strong>Investors assess the startup’s addressable market size, growth potential, and scalability within the Indian market. India’s growing population and increasing consumer demand in various sectors like technology, e-commerce, healthcare, and FinTech influence valuation.</p>
          <p><strong>2. Revenue and Growth Trajectory: </strong>Startups with a proven revenue model, consistent growth, and a predictable revenue stream tend to have higher valuations. High growth rates often positively impact valuations, demonstrating the potential for future returns.</p>
          <p><strong>3. Technology and Innovation: </strong>Innovative technologies, unique business models, patents, or proprietary technologies can significantly impact valuations in India’s competitive startup landscape.</p>
          <p><strong>4. Team and Execution: </strong>The startup team’s expertise, experience, and ability to execute the business plan are crucial factors influencing valuation. A strong, skilled team often attracts higher valuations.</p>
          <p><strong>5. Funding Round and Investor Sentiment: </strong>Previous funding rounds, investor interest, and market sentiment also influence startup valuations. Successful funding rounds or endorsements from reputable investors can positively impact valuations.</p>
        </div>
        <div className="flex-4">
            <Image
              alt="Factors Affecting Company Valuation for Startups in India"
              className="Importance-img-h-100 w-100"
              height={550}
              loading="lazy"
              src={bft}
            />
        </div>
      </div>
    </div>
  )
}
