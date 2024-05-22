import certificate from '../../../assets/images/static/company-registration-in-australia/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>If you are seeking the ideal location to establish and develop your business, consider registering a company in Australia. With a population of approximately 2.6 million people, Australia boasts a highly skilled workforce. Australia is a member of the Regional Comprehensive Economic Partnership (RCEP), the largest free trade agreement globally. Australia ranks 14th on the Ease of Doing Business Index, making it an attractive location for business growth. This article will detail the process of company registration in Australia, eligibility requirements, benefits, and taxation structure.</p>
                <p className='text-justify'>Before beginning the process of registering a company in Australia or venturing into the Australian market, investors need to consider several crucial factors. The owner must decide between forming a new company, bringing in a foreign company, or purchasing an established one. Various business structures are accessible, each with its own set of regulations.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypesOfCompany" className="scrollTo">
                             <li>Types of Company in Australia</li>
                            </a>
                            <a href="#WhyEstablish" className="scrollTo">
                             <li>Why to establish a business in Australia</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                             <li>Documents Required</li>
                            </a>
                            <a href="#HowRegister" className="scrollTo">
                             <li>Process of Registering Your Company in Australia</li>
                            </a>
                            <a href="#Facts" className="scrollTo">
                             <li>Facts to Know</li>
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
                <p className="small-heading text-center">Company Registration in Australia</p>
                <div>
                    <Image alt="Company Registration in Australia" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}