import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>As one of the MENA and MEASA regions' fastest-growing economies, Saudi Arabia provides prospective investors and business owners with a wide choice of corporate prospects. For companies looking to establish themselves in the Middle East market, the Kingdom of Saudi Arabia offers a fantastic opportunity. Saudi Arabia comes up at number 62 in the World Bank's 2020 report on ease of doing business. The Saudi government aggressively encourages investors from the business sector to join and follow their entrepreneurial goals in the region, realizing the benefits that various firms bring, therefore, it is the best option to go ahead with company registration in Saudi Arabia.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits of starting a Business in Saudi Arabia</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of companies for Company Registration in Saudi Arabia</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>Process for Company registration in Saudi Arabia</li>
                            </a>
                            <a href="#PostRegistration" className="scrollTo">
                             <li>Post registration Compliances</li>
                            </a>
                            <a href="#TypesofTaxes" className="scrollTo">
                             <li>Types of Taxes you must know</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>Why Choose RegisterKaro for Company Registration in Saudi Arabia?</li>
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