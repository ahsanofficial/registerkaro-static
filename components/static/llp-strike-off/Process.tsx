import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In accordance with Section 63 of the Limited Liability Partnership Act, 2008 and Rule 37 of the Striking off Name of Defunct LLP, if an LLP does not conduct any business for two or more years, the Registrar will take the initiative to strike off the LLP. If the LLP has not been active or operating for a year, it may choose to apply using Form 24 to have its name removed from the register, with approval from all partners. The registrar will notify the LLP and its partners of the plan to remove the LLP's name and will ask them to provide their opinions and necessary documents within one month of receiving the notice.</p>
                <p className="text-justify">When the LLP is governed by a unique law, the request to deregister its name must include consent from the regulatory body established in that law. If a LLP that is inactive or not operating properly fails to comply with the law, the LLP officers could encounter heavy fines, penalties, and consequences, such as the Directors/Partners being prohibited from establishing another LLP. Consequently, it is recommended to formally terminate a dormant LLP to prevent upcoming penalties and responsibilities.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhenToStrike" className="scrollTo">
                             <li>When to Strike Off an LLP</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                             <li>Documents Required</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of Strike Off</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                             <li>Procedure to Striking Off an LLP</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps in the registration process?</li>
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
                <p className="small-heading text-center">Striking Off LLP</p>
                <div>
                    <Image alt="Striking Off LLP" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}