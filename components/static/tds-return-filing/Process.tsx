import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The deductor is in charge of filing the TDS return with the Income Tax (IT) department in addition to remitting the tax. The TDS return filing is a quarterly report that offers a summary of every transaction done during that quarter that is relevant to TDS. It typically contains details on the TDS amounts that were gathered and deposited with the IT division. A TDS return contains other Information such as PAN Card [both deductor and deductee], TDS remitted with the government, Information about the TDS challan used to pay taxes and other additional details. Following the successful filing of the TDS returns, the data appears on Form 26AS.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Eligible" className="scrollTo">
                                <li>Are you eligible for a TDS Return?</li>
                            </a>
                            <a href="#Forms" className="scrollTo">
                                <li>Forms you need to know for TDS Return Filing</li>
                            </a>
                            <a href="#Deadlines" className="scrollTo">
                                <li>Check the deadlines</li>
                            </a>
                            <a href="#ProcessBtn" className="scrollTo">
                                <li>Process of TDS Return filing</li>
                            </a>
                            <a href="#Rates" className="scrollTo">
                                <li>Few common TDS Rates</li>
                            </a>
                            <a href="#Happens" className="scrollTo">
                                <li>What happens when you do late TDS Filing?</li>
                            </a>
                            <a href="#HowDoes" className="scrollTo">
                                <li>How does RegisterKaro help in the process?</li>
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