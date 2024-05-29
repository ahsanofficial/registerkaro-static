import dft from "../../../assets/images/static/terms-of-use-agreement/Introduction to Terms of Use Agreement.svg";
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Commencing a business venture entails fulfilling an array of legal responsibilities, obtaining licenses, engaging in contractual agreements etc. Among these fundamental legal documents, the Terms and Conditions Agreement (also referred to as Terms of Use and Terms of Service agreement) holds considerable significance for entrepreneurs.</p>
                <p className='text-justify'>The Terms of Use Agreements delineate the contractual terms between two parties i.e. the company providing the product or service and the customer utilising it. Unlike conventional contracts, there is no requirement to sign the agreement. In the cases of online platforms, applications, and websites the agreement simply takes effect when consumers check the <em>"I Accept"</em> box being presented on the screen or sometimes even by simply utilizing the product or service.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Advantages" className="scrollTo">
                             <li>Advantages of Terms of Use Agreement</li>
                            </a>
                            <a href="#Importance" className="scrollTo">
                             <li>Importance of Terms of Use Agreements for Organisations</li>
                            </a>
                            <a href="#AreLegallyBindings" className="scrollTo">
                             <li>Are Terms of Use Agreements Legally Binding?</li>
                            </a>
                            <a href="#KeyClauses" className="scrollTo">
                             <li>Key Clauses to Include in Your Terms of Use Agreement</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                             <li>Procedure to Creating Terms of Use  Agreement</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Terms of Use Agreement</p>
                <div>
                    <Image alt="Introduction to Terms of Use Agreement" className="certificate h-100 w-100" loading="lazy" src={dft} />
                </div>
            </div>
        </div>
    )
}