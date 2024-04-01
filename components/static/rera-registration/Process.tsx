import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>To regularize the issues that arise in the real estate industry, the Real Estate Regulatory Authority (RERA) was founded. Prior to beginning any marketing, sales, advertising, or soliciting people to invest in a plot, apartment, or building, the Real Estate (Regulation & Development) Act mandates that the asset be registered (RERA Registered). Promoters of construction and buildings, as well as other middlemen including building companies, developers, real estate brokers, etc., are subject to the RERA legislation. To ensure responsibility and openness in the real estate sector, developers and agents are required to register with the Real Estate Regulatory Authority, or RERA. We at RegisterKaro simplify the RERA registration procedure. You can rely on us to bring you comfort and guidance throughout the procedure.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyOpt" className="scrollTo">
                                <li>Why to opt for RERA Registration Certificate?</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Check your Eligibility for RERA Registration Certificate</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required for RERA Registration</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>RERA Registration Process</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why to choose RegisterKaro?</li>
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