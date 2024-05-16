import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'
import Image from 'next/image'

export const Process = () => {
  return (
    <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
        <div className='flex-5'>
            <p className='text-justify'>Company valuation for startups in India is a critical aspect that determines the worth of a company based on various factors such as growth potential, market trends, revenue projections, and industry comparisons. Valuation plays a crucial role, especially during fundraising rounds, mergers, acquisitions, or when attracting investors. Understanding the methods and intricacies of startup valuation is essential for founders, investors, and stakeholders involved in the startup ecosystem in India.</p>
            <p className='text-justify'>With the rising trend of entrepreneurship and startups, there is a significant growing demand to get a high valuation, making startups a possible location for funding or investment the expanding business at an initial stage. An external evaluator can help in identifying vital performance metrics like revenue capital or profit estimation, as well as presenting future growth prospects. If a startup in India has a greater valuation, it can give less stock or shares in exchange for funding from an investors. <strong>RegisterKaro</strong> specializes in providing Company Valuation services for Startups with presence across major cities of India.</p>
            <div className='page-point'>
                <ul>
                    <ul>
                        <a href="#MethodsUsed" className="scrollTo">
                            <li>Methods Used for Company Valuation of Startups</li>
                        </a>
                        <a href="#FactorsAffectingValuation" className="scrollTo">
                            <li>Factors Affecting Company Valuation for Startups in India</li>
                        </a>
                        <a href="#ChallengesInValuation" className="scrollTo">
                            <li>Challenges in Startup Valuation in India</li>
                        </a>
                        <a href="#WhyForStartupEvaluation" className="scrollTo">
                            <li>Why RegisterKaro for Startup Valuation?</li>
                        </a>
                        <a href="#Why" className="scrollTo">
                            <li>Why RegisterKaro?</li>
                        </a>
                    </ul>
                </ul>
            </div>


        </div>
        <div className='flex-5'>
            <p className="small-heading text-center">Company Valuation for Startups</p>
            <div className='d-flex justify-content-center'>
                <Image alt="Company Valuation for Startups" className="certificate h-100 w-60 " loading="lazy"  src={bft} />
            </div>
        </div>
        
    </div>
  )
}
