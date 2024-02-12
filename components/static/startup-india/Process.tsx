import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>India’s startup scene is thriving, witnessing a surge in young entrepreneurs each year. With a supportive government backing, startups contribute significantly to the nation’s economic growth. These ventures, offering innovative solutions to societal challenges, redefine existing products or services. The Startup India Initiative, championed by the Indian government, aims to nurture aspiring entrepreneurs. The accompanying Startup India Scheme provides crucial financial and mentoring support for the growth and expansion of startup companies. This initiative not only promotes startups but also focuses on creating employment opportunities and fostering wealth generation. At RegisterKaro, we have a team of professionals who will help you in getting Startup India Registration without any hassle and at a very low cost.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Startup" className="scrollTo">
                                <li>What is a Startup?</li>
                            </a>
                            <a href="#TypeOfSubs" className="scrollTo">
                                <li>Objectives of Startup India Movement</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Benefits of Startup India Registration</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for the Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Who is not eligible for Startup India Registration or Startup India Recognition?</li>
                            </a>
                            <a href="#DocRequired" className="scrollTo">
                                <li>Documents required for Startup India Company Registration</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for obtaining Startup India Registration Certificate</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>How can RegisterKaro help you?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Startup India Registration Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}