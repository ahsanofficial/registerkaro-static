import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Founders’ Agreement is a legal document that defines the roles, responsibilities, and ownership of each founder in a business. It also covers important aspects such as intellectual property, decision making, dispute resolution, exit strategy, and more. A Founders’ Agreement is essential for any startup that wants to establish a clear and fair relationship among the co-founders and set the foundation for a successful venture.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Components" className="scrollTo">
                                <li>Components of Founders’ Agreement</li>
                            </a>
                            <a href="#DocumentsReq" className="scrollTo">
                                <li>Documents Required for Founders’ Agreement</li>
                            </a>
                            <a href="#ProcessStep" className="scrollTo">
                                <li>Procedure for Drafting Founders’ Agreement</li>
                            </a>
                            <a href="#TerminateMeaning" className="scrollTo">
                                <li>Meaning of Terminating Founders’ Agreement</li>
                            </a>
                            <a href="#WhyChooseReg" className="scrollTo">
                                <li>Why choose Registerkaro for Founders’ Agreement service?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
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
