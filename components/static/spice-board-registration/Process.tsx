import dft from "../../../assets/images/static/spice-board-registration/Spice Board Registration.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Certification and supervision of quality. Exporter registration. Gathering and recording trade data. Offering advice to the Central Government regarding policies concerning the import and export of spices.</p>
                <p className='text-justify'>Encouraging the exporting of spices and spice products. Quality control and supervision of exported goods. Improving production methods by conducting research in scientific, technological, and economic fields. Advice for farmers on achieving increased and improved crop yields through the implementation of scientific farming techniques. Supplying growers with financial and material assistance.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyBeneficial" className="scrollTo">
                             <li>Why it’s Beneficial?</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                             <li>Documents Required</li>
                            </a>
                            <a href="#HowRegister" className="scrollTo">
                             <li>How To Register?</li>
                            </a>
                            <a href="#ListOfSpices" className="scrollTo">
                             <li>List Of Spices for Registration</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps you in the registration process?</li>
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
                <p className="small-heading text-center">Spice Board Registration</p>
                <div>
                    <Image alt="Spice Board Registration" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}