import certificate from '../../../assets/images/static/revival-of-struck-off-companies/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Strike off means temporary closure of the company or removal of the name of the company from the register of company by the register following the previsions of the Companies Act, 2013. It is a substitute for winding up of the company, and in this case, the company can get revived for a period of 20 years from the date of strike-off. The appeal or application can be filed by the registrar, any person aggrieved by order of the Registrar or by Company, or by member or creditor or workman. The member, creditor or workman of a company can file a petition for Revival of the Company before the expiry of 20 years of striking off from notification in the official gazette under section 252(1), and others can file a petition under section 252(3) within three years from the publication of notification in the official gazette. The demand draft of Rs. 1000/- should be filed with the petition as fees.</p>
                <p className='text-justify'>It is important that the appeal has to be filed within three years of the date of order of the register of company in case of compulsory striking off by the registrar and the limitation period is twenty years with respect to striking off the company’s name from the date of publication of notice in the Official Gazette.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Revival" className="scrollTo">
                                <li>Grounds for Revival of Struck off Companies</li>
                            </a>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can apply for Revival?</li>
                            </a>
                            <a href="#Strike" className="scrollTo">
                                <li>Strike off of Companies under Companies Act, 2013</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for revival of Struck off companies as per Companies Act, 2013</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits to Activate Struck Off Company</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for the Revival of Struck Off Companies</li>
                            </a>
                            <a href="#Restore" className="scrollTo">
                                <li>Procedure to restore struck- off companies</li>
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
                <p className="small-heading text-center">Revival of Struck Off Companies</p>
                <div>
                    <Image alt="An Overview of Revival of Struck Off Companies" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}