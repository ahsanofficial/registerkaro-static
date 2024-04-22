import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Process = () => {
  return (
    <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
        <div className='flex-5'>
            <p className='text-justify'>A trademark is a brand or logo that includes a symbol, letters, words, numbers, or phrases connected to a business or person’s products or services. A trademark serves as a company’s or individual’s identity, assisting customers in selling branded goods and services apart from those offered by competitors. Therefore, in order to prevent unauthorized use of a trademark by third parties, registration is required. Trademark registration is, however, restricted to some regions. As a result, protection for a trademark is limited to India when it is registered there. To protect their Trademark outside of India, trademark owners must apply for International Trademark Registration. Owners of trademarks that are registered internationally are able to use their marks outside of India and prevent other parties from registering identical marks in other markets. </p>
            <div className='page-point'>
                <ul>
                    <ul>
                        <a href="#WhyChoose" className="scrollTo">
                            <li>Why choose International Trademark Registration?</li>
                        </a>
                        <a href="#WIPO" className="scrollTo">
                            <li>WIPO & International Trademark Registration</li>
                        </a>
                        <a href="#MadridProtocol" className="scrollTo">
                            <li>Madrid Protocol & Madrid Agreement</li>
                        </a>
                        <a href="#CheckIfCanApply" className="scrollTo">
                            <li>Check if you can apply for the International Trademark Registration</li>
                        </a>
                        <a href="#RequirementsToFulfil" className="scrollTo">
                            <li>Requirements to be fulfilled for International Trademark Registration</li>
                        </a>
                        <a href="#ProcessOfRegn" className="scrollTo">
                            <li>Process of International Trademark Registration</li>
                        </a>
                        <a href="#HowRegisterKaroHelps" className="scrollTo">
                            <li>How RegisterKaro helps you with the International Trademark Registration?</li>
                        </a>
                        <a href="#Why" className="scrollTo">
                            <li>Why RegisterKaro?</li>
                        </a>
                        <a href="#Faq" className="scrollTo">
                            <li>FAQs</li>
                        </a>
                    </ul>
                </ul>
            </div>
        </div>
        <div className='flex-5'>
            <p className="small-heading text-center">Company Registration in Qatar</p>
            <div>
                <Image alt="An Overview of Company Registration in Qatar" className="certificate h-100 w-100" loading="lazy" src={bft} />
            </div>
        </div>
    </div>
  )
}
