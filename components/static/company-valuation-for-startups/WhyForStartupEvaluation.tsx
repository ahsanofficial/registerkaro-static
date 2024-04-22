import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const WhyForStartupEvaluation = () => {
  return (
    <div id='WhyForStartupEvaluation'>
      <div className="factors-affecting-valuation flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Factors Affecting Company Valuation for Startups in India"
            className="WhyForStartupEvaluation-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <ol>
            <li>A Startup is a new business that is potentially fast expanding & tries to fill a void in the Indian Market by producing & facilitating a new and original product, process or service, but is currently facing challenges.</li>
            <li>RegisterKaro is a Company that also provide services for Company Valuation for Startups. We can help with everything from providing advice in the initial phase to ensuring that correct and right results are produced & precise financial analysis is made.</li>
            <li>At RegisterKaro, we specialize in precise startup valuation services tailored for the Indian market. Our seasoned team of valuation experts ensures accurate assessments across diverse industries, focusing particularly on tech startups and early-stage ventures.</li>
            <li>With a wealth of experience in startup valuation, we offer comprehensive solutions for both pre-revenue startups and those eyeing acquisition opportunities. Our progressive valuation methodologies and advanced tools guarantee reliable insights, facilitating well-informed investment decisions.</li>
            <li>Trusted by clients nationwide, we deliver top-notch startup valuation services in major Indian cities. Our startup valuation calculators streamline the assessment process, providing efficient and accurate results for thorough financial analysis.</li>
            <li>At RegisterKaro, we take pride in delivering the highest level of accuracy in startup valuation, supporting the growth of innovative ventures in India. By availing our services, entrepreneurs can sidestep the pitfalls of inaccurate valuation methods, ensuring a smooth business journey without penalties or complications.</li>
            <li>Choose RegisterKaro for prompt and effective services, enabling you to manage your business seamlessly and avoid the negative outcomes associated with faulty valuation methods.</li>
          </ol>
        </div>
        
      </div>
      
    </div>
  )
}
