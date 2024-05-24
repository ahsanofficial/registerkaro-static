import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Commencing a business venture entails fulfilling an array of legal responsibilities, obtaining licenses, engaging in contractual agreements etc. Among these fundamental legal documents, the Terms and Conditions Agreement (also referred to as Terms of Use and Terms of Service agreement) holds considerable significance for entrepreneurs.</p>
                <p className='text-justify'>The Terms of Use Agreements delineate the contractual terms between two parties i.e. the company providing the product or service and the customer utilising it. Unlike conventional contracts, there is no requirement to sign the agreement. In the cases of online platforms, applications, and websites the agreement simply takes effect when consumers check the <em>"I Accept"</em> box being presented on the screen or sometimes even by simply utilizing the product or service.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatisBee" className="scrollTo">
                             <li>What is BEE Certification?</li>
                            </a>
                            <a href="#WhoNeedsBee" className="scrollTo">
                             <li>Who needs a BEE Certificate?</li>
                            </a>
                            <a href="#Classification" className="scrollTo">
                             <li>Classification of BEE Certification</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                             <li>Documents required for the BEE Registration</li>
                            </a>
                            <a href="#FeesRequired" className="scrollTo">
                             <li>Fees required for BEE Registration</li>
                            </a>
                            <a href="#WhyNeedBee" className="scrollTo">
                             <li>Why do we need a BEE Certificate?</li>
                            </a>
                            <a href="#BenefitsBee" className="scrollTo">
                             <li>Benefits of BEE registration</li>
                            </a>
                            <a href="#Penalty" className="scrollTo">
                             <li>Penalty for Non- compliance with BEE guidelines</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                             <li>Renewal of BEE Certificate</li>
                            </a>
                            <a href="#Withdrawal" className="scrollTo">
                             <li>Withdrawal of BEE Certificate by manufacturer</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps in the registration process?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Terms of Use Agreement</p>
                <div>
                    <Image alt="Introduction to Terms of Use Agreement" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}