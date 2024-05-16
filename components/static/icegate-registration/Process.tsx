import certificate from '../../../assets/images/static/icegate-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-7'>
                <p className='text-justify'>ICEGATE stands for Indian Customs Electronic Gateway. It is an online platform that facilitates the filing of customs and import-export documents, reducing paperwork and accelerating the customs clearance process. The registration of ICEGATE is mandatory for cargo carriers and trading partners. It provides benefits such as reduced processing time, lower overall costs due to reduced manpower requirements, and increased visibility into shipment status.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCanHave" className="scrollTo">
                                <li>Who can have an ICEGATE Registration?</li>
                            </a>
                            <a href="#ProcessStep" className="scrollTo">
                                <li>Process of ICEGATE Registration </li>
                            </a>
                            <a href="#DocumentPrerequisites" className="scrollTo">
                                <li>List of documents and Pre-requisites for user registration on ICEGATE</li>
                            </a>
                            <a href="#ProprietorshipEntities" className="scrollTo">
                                <li>Prerequisites for Proprietorship Entities</li>
                            </a>
                            <a href="#CorporateEntity" className="scrollTo">
                                <li>Prerequisites where Entity Type is Corporate (Company or LLP)</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of ICEGATE Registration</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Registration Process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-3'>
                <p className="small-heading text-center">Icegate Registration</p>
                <div>
                    <Image alt="Icegate Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
