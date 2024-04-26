import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>An Appointment of a Managing Director (MD) is necessary to lead and manage a company's overall operations. The statutory requirements for appointing a Managing Director in India apply to both private and public companies, with eligibility criteria including qualifications, citizenship, and residency status, necessitating compliance with the Companies Act and other regulations, along with specific disclosures and approvals, conferring key responsibilities and powers, subject to any tenure restrictions and provisions for reappointment, impacting corporate governance practices, and influencing the rights and duties of the Board of Directors and shareholders.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Why is there a Necessity / Reason to appoint a Managing Director?</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>Eligibility Criteria for the Appointment of Managing Director</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Section 96 of the Companies Act has prescribed the provision for the appointment of Directors:</li>
                            </a>
                            <a href="#managing" className="scrollTo">
                                <li>Procedure for Appointment of Managing Director</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Procedure for appointment of Managing Director Private Company</li>
                            </a>
                            <a href="#Publiclimited" className="scrollTo">
                                <li>Procedure for the Appointment of Public Limited Company </li>
                            </a>
                            <a href="#appointment" className="scrollTo">
                                <li>List of the documents required for the Appointment of Managing Director</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Franchise Agreement Process</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Appointment of managing director</p>
                <div>
                    <Image alt="regulatory authority for implementing various pollution control laws," className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}