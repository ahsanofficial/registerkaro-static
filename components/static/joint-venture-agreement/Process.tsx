import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A joint venture agreement is a legal contract between two or more parties who agree to collaborate on a specific project or business activity. A joint venture agreement defines the rights and obligations of each party, such as the scope of work, the sharing of profits and losses, the management and control of the joint venture, the dispute resolution mechanism, and the termination clauses.</p>
                <div className='page-point'>
                    <ul>
                        <a href="#Benefits" className="scrollTo">
                            <li>What are the Benefits of Joint Venture?</li>
                        </a>
                        <a href="#DocumentsReq" className="scrollTo">
                            <li>Documents Required for Joint Venture Agreement</li>
                        </a>
                        <a href="#ProcessStep" className="scrollTo">
                            <li>How to Register a Joint Venture Agreement in India?</li>
                        </a>
                        <a href="#WhyChooseReg" className="scrollTo">
                            <li>Why choose RegisterKaro for your Joint Venture?</li>
                        </a>
                        <a href="#Why" className="scrollTo">
                            <li>Why RegisterKaro?</li>
                        </a>
                        <a href="#Faq" className="scrollTo">
                            <li>Frequently Asked Questions</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Company Registration in Italy</p>
                <div>
                    <Image alt="An Overview of Company Registration in Italy" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
