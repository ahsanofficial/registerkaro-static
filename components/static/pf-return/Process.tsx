import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A social security system known as Provident Fund was established in order to encourage employees to save and to benefit them in retirement. Each month, the employee and the employer contribute to the <strong>Provident Fund (PF)</strong>. With a few notable exceptions, an employee’s contribution to the PF may only be withdrawn during the duration of their job. Employers registering with PF are required to submit their PF returns on a monthly basis. Each month’s 25th is the deadline for completing the PF return files. We shall go into great detail regarding the several forms that are used to file PF returns here. Employers can utilize the Unified site to conveniently file their PF returns.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can apply for PF?</li>
                            </a>
                            <a href="#WhyOpt" className="scrollTo">
                                <li>Why to opt for PF Return?</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents required for PF Return</li>
                            </a>
                            <a href="#Forms" className="scrollTo">
                                <li>Forms to be familiar with for PF Return</li>
                            </a>
                            <a href="#File" className="scrollTo">
                                <li>How to file PF Return?</li>
                            </a>
                            <a href="#Consequences" className="scrollTo">
                                <li>Consequences of non-filing of PF Return</li>
                            </a>
                            <a href="#KeyPoints" className="scrollTo">
                                <li>Key points to remember for PF Return</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for your PF Return?</li>
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