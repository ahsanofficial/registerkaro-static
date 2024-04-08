import certificate from '../../../assets/images/static/wordmark-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, wordmark registration refers to the process of legally protecting a unique textual representation of a brand name, logo, or slogan used in commerce. It falls under the purview of intellectual property law, specifically trademark registration, governed by the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry. A wordmark is a type of trademark that consists solely of words, letters, or numerals, without any graphical elements or designs. Registering a wordmark provides exclusive rights to the owner to use the mark in connection with specific goods or services and prevents others from using similar marks that could create confusion among consumers.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Wordmark" className="scrollTo">
                                <li>What is the Eligibility for the Registration of Wordmark Online in {cityName}?</li>
                            </a>
                            <a href="#Products" className="scrollTo">
                                <li>A description of products/services Involved</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>What are the Documents Required for Wordmark Registration?</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Wordmark Registration Process in {cityName}</li>
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
                <p className="small-heading text-center">Wordmark Registration</p>
                <div>
                    <Image alt="An Overview of Wordmark Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}