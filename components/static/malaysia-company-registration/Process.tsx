import certificate from '../../../assets/images/static/malaysia-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Malaysia is an economic hotspot in Southeast Asia where both the governmental and private sectors participate equally. According to the World Bank's Ease of Doing Business Survey, Malaysia ranks among the most business-friendly countries in the world.Over the course of the 1970s, Malaysia's economy saw a significant transformation, emerging from a predominantly resource-based economy to one of the most resilient, diverse, and quickly growing economies in Southeast Asia. Malaysia has an abundance of natural resources, which significantly increase the GDP of the nation. All these factors contribute to making Malaysia a preferable destination for entrepreneurs to start their business.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Why to start a business in Malaysia?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies in Malaysia</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Prerequisites for company registration in Malaysia</li>
                            </a>
                            <a href="#Taxes" className="scrollTo">
                                <li>Taxes applicable in Malaysia</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to prepare for company registration in Malaysia</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process of Company Registration in Malaysia</li>
                            </a>
                            <a href="#PostRegistration" className="scrollTo">
                                <li>Post Registration Compliances in Malaysia</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Malaysia?</li>
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
                <p className="small-heading text-center">Company Registration in Malaysia</p>
                <div>
                    <Image alt="An Overview of Company Registration in Malaysia" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}