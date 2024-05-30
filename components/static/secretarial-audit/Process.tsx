import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';
 

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p>A Secretarial Audit is a process used to ensure that an organization is abiding by the laws, rules, regulations, notifications, and other relevant requirements in place during the audit. In this situation, the objective is to verify whether a company has been following the regulations outlined in the Companies Act 2013 and its associated rules.</p>
                <p>The laws pertaining to businesses are highly complicated and continuously expanding. The duties of the directors, promoters, and other managerial roles are also extremely intricate and essential. Hiring a Practicing Company Secretary (PCS) to perform a secretarial audit is essential.</p>
                <p>PCS will make sure that all correct compliance mechanisms and systems are arranged. He makes sure that all the necessary legal and procedural requirements of the law and regulations are being adhered to. If he identifies any errors, he can bring them to the attention of the management so they can make corrections. Secretarial audit, as you might expect, is an ongoing procedure.</p>
                <p>A Company Secretary, who is a member of the ICSI, is typically appointed as a secretarial auditor at the start of the financial year. This decision is made by the board members through a board resolution. He will then present an audit report to the board. Submitting a report every quarter is a better option to ensure the company remains compliant with regulations.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who Can be Secretarial Auditor and Scope of the Auditor</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Secretarial Auditor</li>
                            </a>
                            <a href="#HowRegisterkaro" className="scrollTo">
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
                <p className="small-heading text-center">Secretarial Audit</p>
                <div>
                    <Image alt="Secretarial Audit" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}