import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Microfinance in India supports low-income individuals by offering microloans, micro-savings, and microinsurance through non-profit organizations. These services cater to those without access to traditional banking. In India, "small loans" are defined as amounts below one lakh rupees.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Definition" className="scrollTo">
                                <li>What is a Micro-Finance Company?</li>
                            </a>
                            <a href="#Characteristics" className="scrollTo">
                                <li>Characteristics of Micro Finance Company</li>
                            </a>
                            <a href="#DocumentReq" className="scrollTo">
                                <li>Documents Required for Micro Finance Company Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist to Set Up a Microfinance Company Registration</li>
                            </a>
                            <a href="#ProcessStep" className="scrollTo">
                                <li>Registration Process for Microfinance Company</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Microfinancing</li>
                            </a>
                            <a href="#Limitations" className="scrollTo">
                                <li>Limitations of Microfinancing</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Microfinance Company Registration?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Company Registration in Italy</p>
                <div>
                    <Image alt="An Overview of Company Registration in Italy" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
