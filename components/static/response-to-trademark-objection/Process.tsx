import certificate from '../../../assets/images/static/response-to-trademark-objection/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, trademarks are crucial for businesses, yet obtaining them can be complex. Each year, numerous applications face rejection due to potential conflicts with existing trademarks. Examiners meticulously review applications against registered trademark databases to pinpoint identical or potentially confusing marks. They then compile their findings and rationale for objection in a trademark examination report. This rigorous process serves to protect existing trademarks and maintain clarity for consumers, ultimately preventing confusion in the marketplace.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatTrademar" className="scrollTo">
                             <li>What is trademark objection?</li>
                            </a>
                            <a href="#ReasonTrademark" className="scrollTo">
                             <li>Reason for Trademark Objection?</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>What are the steps of a Trademark Objection reply?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                             <li>The benefit of Trademark objection Reply?</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents required for a trademark objection response includes:</li>
                            </a>
                            <a href="#TrademarkObjection" className="scrollTo">
                             <li>Trademark Objection Response: Overcoming Challenges under Sections 9 & 11</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro Can Assist You in the Network Licensing Process?</li>
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
                <p className="small-heading text-center">Response To Trademark Objection</p>
                <div>
                    <Image alt="Response To Trademark Objection" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}