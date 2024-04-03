import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, wordmark registration refers to the process of legally protecting a unique textual representation of a brand name, logo, or slogan used in commerce. It falls under the purview of intellectual property law, specifically trademark registration, governed by the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry. A wordmark is a type of trademark that consists solely of words, letters, or numerals, without any graphical elements or designs. Registering a wordmark provides exclusive rights to the owner to use the mark in connection with specific goods or services and prevents others from using similar marks that could create confusion among consumers.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Wordmark" className="scrollTo">
                                <li>What is the Eligibility for the Registration of Wordmark Online in India?</li>
                            </a>
                            <a href="#Products" className="scrollTo">
                                <li>A description of products/services Involved</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>What are the Documents Required for Wordmark Registration?</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Wordmark Registration Process in India</li>
                            </a>
                            <a href="#Validity" className="scrollTo">
                                <li>Validity of Wordmark Registration</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                                <li>Renewal of Wordmark Registration Certificate</li>
                            </a>
                            <a href="#Cancellation" className="scrollTo">
                                <li>Cancellation of Wordmark Registration Application</li>
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