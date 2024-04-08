import React from 'react'
import certificate from '../../../assets/images/static/change-llp-agreement/certificate.svg'
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, registering an LLP follows rules laid out in the LLP Act of 2008. When you set up an LLP, you have to submit a special LLP Agreement. Think of it like a rulebook that decides how the LLP will work. This LLP Agreement isn’t just a piece of paper – it’s like the boss that guides everything the partnership does. Partners need to follow the rules in the agreement, and breaking any of them is a big deal. But, just like life, businesses change too. That’s when you might need to tweak the LLP Agreement. Maybe you want to adjust how much money each partner puts in, change the kind of work you do, or sort out who does what. These changes are like updates to the rulebook, and they’re made when all the partners agree. When it’s time change LLP Agreement, RegisterKaro is here to help. We’re like the helpful guide that takes care of all the paperwork and legal stuff so your LLP can smoothly go through these changes. Think of us as your partner in making your business grow and evolve.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Primary" className="scrollTo">
                                <li>Primary Reasons – Change LLP Agreement</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>What are the documents required to change LLP agreement?</li>
                            </a>
                            <a href="#Changing" className="scrollTo">
                                <li>What is the process of changing an LLP agreement?</li>
                            </a>
                            <a href="#HowCan" className="scrollTo">
                                <li>How Can We Help You?</li>
                            </a>
                           
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Change LLP Agreement</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Change LLP Agreement" className="certificate h-50 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
