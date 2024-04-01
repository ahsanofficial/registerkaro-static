import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Qatar stands as one of the world's most prosperous nations by the foot of its economy as it holds the highest GDP (per person) in the world. Qatar has a corporate tax rate of 10%, which is lower than that of other nations and the tax is waived even in certain niche business sectors. All these factors make Qatar an attraction point for investors, entrepreneurs, businessmen to start their business in its land. Due to strict legal regimes, and advanced regulations, many assume that starting business in Qatar is quite tough. Despite what you might believe, Company Registration in Qatar is not difficult if chosen the right process partner. </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits of starting a Business in Qatar</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of companies for Company Registration in Qatar</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>Company registration Process in Qatar</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>Why Choose RegisterKaro for Company Registration in Qatar?</li>
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
                <p className="small-heading text-center">Company Registration in United Kingdom</p>
                <div>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}