import React from 'react'
import certificate from '../../../assets/images/static/nbfc-compliances/pre-incorporation.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Non-banking financial companies (NBFCs) are crucial players in India's financial sector. They offer a variety of financial services like loans, insurance, and investment management to people and businesses. However, NBFCs need to follow many rules and regulations to operate properly and legally. Unlike banks, NBFCs don't have a banking license and can't take deposits from the public. But they're important for giving credit to individuals and businesses who are unable to access regular banking services. NBFCs have to follow various rules prescribed by different authorities. These include guidelines from the Reserve Bank of India (RBI), rules under the Companies Act, 2013, and regulations from the Securities and Exchange Board of India (SEBI).</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                               <li>Types of NBFCs</li>
                            </a>
                            <a href="#EssentialRequirements" className="scrollTo">
                               <li>Essential Requirements for NBFC Compliances</li>
                            </a>
                            <a href="#PostIncorporation" className="scrollTo">
                               <li>Post-Incorporation NBFC Compliances</li>
                            </a>
                            <a href="#ListOfEssential" className="scrollTo">
                               <li>List of Essential NBFC Compliances</li>
                            </a>
                            <a href="#RBIMasterDirection" className="scrollTo">
                               <li>RBI Master Direction - Prudential Regulation</li>
                            </a>
                            <a href="#ChallengesInManaging" className="scrollTo">
                               <li>Challenges in Managing Compliance for NBFCs</li>
                            </a>
                            <a href="#Consequences" className="scrollTo">
                               <li>Consequences of Non-Compliance with NBFC Regulations</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                               <li>How can RegisterKaro help?</li>
                            </a>

                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">NBFC Compliances</p>
                <div>
                    <Image alt="Overview of NBFC Compliances" className="certificate h-100 w-100 Importance-img-h-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
