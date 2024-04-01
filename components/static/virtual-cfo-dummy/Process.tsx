import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'> Any business requires a Chief Financial Officer which assist the business in term of financial decision making. The process of getting Virtual CFO Services is not as simple as it sounds as it includes multiple other major steps like overseeing financial risk management, generating financial report, strategic decision making, coaching and mentoring MSMEs and startups, and direct accountability to the stakeholders of the organization.</p>
                <p className='text-justify'>A virtual CFO is an advanced form of CFO which does not require one individual person to be at your premises to deal all the matters required. Now, you may outsource such services and get all your work done without moving an inch. Virtual CFO may offer you advice and direction on cutting-edge strategies to increase your company’s profitability and help you meet your objectives like that of a traditional CFO.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why to choose Virtual CFO Services over Traditional CFO Services?</li>
                            </a>
                            <a href="#Functions" className="scrollTo">
                                <li>Functions of a Virtual CFO</li>
                            </a>
                            <a href="#CFOServices" className="scrollTo">
                                <li>Why to avail Virtual CFO Services?</li>
                            </a>
                            <a href="#Virtual" className="scrollTo">
                                <li>Virtual CFO for all</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Virtual CFO services</li>
                            </a>
                            <a href="#WhyRegisterKaroChoose" className="scrollTo">
                                <li>Why RegisterKaro for Virtual CFO Services?</li>
                            </a>
                            <a href="#OurProcess" className="scrollTo">
                                <li>Our Process to get Virtual CFO Services</li>
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