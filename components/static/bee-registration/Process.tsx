import dft from "../../../assets/images/static/bee-registration/one.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, the Ministry of Power established the Bureau of Energy Efficiency (BEE) in March 2002, and it functions in compliance with the Energy Conservation Act of 2001. The principal aim of BEE is to encourage and assist energy efficiency projects in all areas of the nation.</p>
                <p className='text-justify'>It runs awareness campaigns and imposes regulations on energy efficiency. In accordance with BEE rules, it also certifies producers, exporters, and dealers of electric appliances. To start doing business in India, it is crucial for all manufacturers and traders to obtain BEE certification.</p>
                
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
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Overview on BEE Registration in India</p>
                <div>
                    <Image alt="Overview on BEE Registration in India" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}