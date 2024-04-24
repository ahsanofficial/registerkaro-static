import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Defamation is an offence in which a person makes a false statement about another person in front of a third person by words, signs, or visible representations to cause harm and also with the knowledge that it will cause harm to the person's reputation. It is of two types: Civil and Criminal.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Understanding" className="scrollTo">
                                <li>Understanding Legal Notices</li>
                            </a>
                            <a href="#Definition" className="scrollTo">
                                <li>What is a Legal Defamation Notice</li>
                            </a>
                            <a href="#CriminalDefamation" className="scrollTo">
                                <li>Criminal Defamation</li>
                            </a>
                            <a href="#CivilDefamation" className="scrollTo">
                                <li>Civil Defamation</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How does Register Karo help?</li>
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
