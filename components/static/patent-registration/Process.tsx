import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>An invention is a product or a method that, in general, gives a new way of doing something or presents a novel technical solution to a problem. A patent is an exclusive right awarded for such an invention. Technical details of the invention must be made public in a patent application in order to get one. A patent is a type of intellectual property that, in exchange for publishing an invention for public disclosure, gives its owner the legal right to prohibit others from creating, importing, using, and selling it for a set amount of time. Put another way, a patent is the exclusive right granted to an invention, which is a good or method that usually gives a fresh approach to an old problem or a new technological solution. To protect an innovation, a patent application needs to make public all technical details about it. The complete process of Patent Registration involves a series of steps which are mandatorily followed to get a Patent in India. Both businesses & individuals can apply for Patent Registration for their inventions.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypesPatents" className="scrollTo">
                               <li>Types of Patents</li>
                            </a>
                            <a href="#WhyPatent" className="scrollTo">
                               <li>Why Patent Registration? </li>
                            </a>
                            <a href="#Check" className="scrollTo">
                               <li>Check if you can proceed with Patent Registration </li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                               <li>Documents Required for Patent Registration</li>
                            </a>
                            <a href="#Forms" className="scrollTo">
                               <li>Forms Used in Patent Registration</li>
                            </a>
                            <a href="#ProcessSteps" className="scrollTo">
                               <li>Process for Patent Registration</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                               <li>How does RegisterKaro help you with Patent Registration?</li>
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