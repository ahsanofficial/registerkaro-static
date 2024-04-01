import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The full form of PSARA is Private Security Agency (Regulation) Act, 2005 which is a comprehensive law enacted to regulate the proper functioning of Private Security Agencies in India. PSARA License is the license granted under the Act to validate the legal existence of such agencies in India.</p>
                <p className='text-justify'>The current era witnesses a surge in individuals embarking on entrepreneurial ventures and establishing their own enterprises. This rapid proliferation of small businesses in the commercial realm has underscored the imperative for security and safety measures. Entities specializing in training and offering security services are commonly referred to as security agencies. Presently, a multitude of private security agencies has emerged to address the security requirements of both individuals and businesses. In India, the Private Security Agency (Regulation) Act, 2005 (PSARA) vigilantly oversees all operations and activities of these diverse private security agencies.</p>
                <p className='text-justify'>The growing business environment in India has heightened the demand for private security across various sectors. From banks to upscale restaurants, car showrooms to state-of-the-art factories, the necessity for robust protection has become paramount to either ward off criminal elements or ensure the proper maintenance of security measures. In response to this escalating safety concern, the Private Security Agency (Regulation) Act, 2005 (PSARA) was enacted. This legislation provides the framework for establishing a legitimate private security agency in India. Furthermore, the Act governs every facet of private security agencies in the country, encompassing aspects such as registration and the recruitment of personnel for security services.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Agency" className="scrollTo">
                                <li>What is a Private Security Agency?</li>
                            </a>
                            <a href="#Significant" className="scrollTo">
                                <li>Significant Role Played by Private Security Agencies in India</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>What are the Benefits of PSARA License?</li>
                            </a>
                            <a href="#Eligible" className="scrollTo">
                                <li>Who is Eligible for PSARA?</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for PSARA License</li>
                            </a>
                            <a href="#HowApply" className="scrollTo">
                                <li>How to apply for PSARA License?</li>
                            </a>
                            <a href="#Timeframe" className="scrollTo">
                                <li>Timeframe for Obtaining a PSARA License</li>
                            </a>
                            <a href="#Appointment" className="scrollTo">
                                <li>Appointment of Supervisors</li>
                            </a>
                            <a href="#Contact" className="scrollTo">
                                <li>Contact RegisterKaro’s Experts for Premium Support on PSARA License</li>
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