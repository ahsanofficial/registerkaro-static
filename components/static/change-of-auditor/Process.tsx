import certificate from '../../../assets/images/static/change-of-auditor/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-6'>
                <p className='text-justify'>Auditors are experts in finance who conduct audits by evaluating financial statements, internal procedures, and transaction documents to determine their accuracy and completeness. The primary categories of auditors are internal and external. Internal auditors typically are employed by the organization they audit and provide advice to management regarding enhancing recording and reporting procedures. However, external auditors are employed by accounting firms to conduct audits on companies other than their own.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Definition" className="scrollTo">
                                <li>Auditor of a Company</li>
                            </a>
                            <a href="#Role" className="scrollTo">
                                <li>Role of Auditor</li>
                            </a>
                            <a href="#RemovalOfAuditor" className="scrollTo">
                                <li>Removal of Auditor</li>
                            </a>
                            <a href="#Appointment" className="scrollTo">
                                <li>Appointment of Auditor</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro helps you in the Registration process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-4'>
                <p className="small-heading text-center">Change of Auditor</p>
                <div>
                    <Image alt="Change of Auditor" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
