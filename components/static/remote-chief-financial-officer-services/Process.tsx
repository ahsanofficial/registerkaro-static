import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A senior member of a company's management team, a Chief Financial Officer (CFO) is responsible for managing financial risk, producing financial reports, making strategic decisions, and providing coaching and mentoring to start-ups and MSMEs. The stakeholders in the organization hold him directly responsible. A remote CFO can provide you with forward-thinking strategies to increase your company's profitability and accomplish your objectives.</p>
                <p className='text-justify'>Due to a shortage of funding, companies like start-ups, Micro, Small & Medium-Sized firms (MSME), and other Small and Medium-Sized firms typically find it challenging to hire an internal CFO. Consequently, some companies employ remote CFO services in an effort to boost productivity.</p>
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
                <p className="small-heading text-center">Company Registration in Qatar</p>
                <div>
                    <Image alt="An Overview of Company Registration in Qatar" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}