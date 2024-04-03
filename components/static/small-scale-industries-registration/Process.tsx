import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, MSME Registration is synonymous with SSI registration, small business registration, or small scale industry registration. The Directorate of Industries of the State Government, on behalf of the Ministry of Micro, Small, and Medium Enterprises, facilitates SSI Registration. Maintaining data and a list of SSI companies in India is the primary goal of SSI registration, as it enables the provision of support services and incentives. According to the MSME standards, all State Governments have implemented uniform registration procedures. On the other hand, some states have changed how to apply for Small Scale Industries Registration. As a result, each State would have a different registration process.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Small" className="scrollTo">
                                <li>Types of Small Scale Industries</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Check your eligibility for Small Scale Industries Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for the Small Scale Industries Registration</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents you will need for Small Scale Industries Registration</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits to avail under Small Scale Industries Registration</li>
                            </a>
                            <a href="#Proceed" className="scrollTo">
                                <li>How to proceed with Small Scale Industries Registration?</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro helps you in the Registration process?</li>
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