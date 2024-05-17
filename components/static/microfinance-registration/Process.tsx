import certificate from '../../../assets/images/static/microfinance-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-7'>
                <p className='text-justify'>Microfinance in {cityName} supports low-income individuals by offering microloans, micro-savings, and microinsurance through non-profit organizations. These services cater to those without access to traditional banking. In {cityName}, "small loans" are defined as amounts below one lakh rupees.</p>
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
            <div className='flex-3'>
                <p className="small-heading text-center">Microfinance Company Registration</p>
                <div>
                    <Image alt="Microfinance Company Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
