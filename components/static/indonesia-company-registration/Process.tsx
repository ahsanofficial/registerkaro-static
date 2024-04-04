import certificate from '../../../assets/images/static/indonesia-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>With an annual growth rate of 6%, Indonesia is among the world's fastest growing countries. Between the Pacific and Indian oceans is where it is situated. It has the largest domestic marketplaces in Asia, after China and India. According to World Bank reports, Indonesia's ranking in the "Ease of doing business" index for 2020 is 73rd out of 190 countries. Indonesia is a member of the G20 and the fourth-largest country in the world by population. Because of this, entrepreneurs find Indonesia to be a desirable place to start their businesses. Additionally, the services industry in Indonesia generates more than one-third of the nation's GDP. In particular, tourism is now a substantial source of income.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Starting a Business in Indonesia</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies for Company Registration in Indonesia</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Company Registration Process in Indonesia</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Types of taxes applicable in Indonesia</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Indonesia?</li>
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
                <p className="small-heading text-center">Company Registration in Indonesia</p>
                <div>
                    <Image alt="An Overview of Company Registration in Indonesia" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}