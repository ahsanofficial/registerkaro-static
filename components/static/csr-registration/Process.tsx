import certificate from '../../../assets/images/static/csr-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>CSR Registration, also known as the Corporate Social Responsibility Act, was introduced by the government to encourage private sector involvement in social initiatives. Previously optional, private companies are now required to meet specific criteria set by the government and actively participate in charitable activities as outlined in the CSR act. More detailed analysis will be provided here.</p>
                <p className='text-justify'>Corporate social responsibility (CSR) is a type of global corporate self-regulation that involves businesses participating in or supporting volunteering and ethically-driven practices to help achieve the goals of activism, philanthropy, or charity. Introduction of the Companies Act, 2013 by the Ministry of Corporate Affairs (MCA), Government of India, was one of the most comprehensive trials globally of mandating corporate social responsibility (CSR) by legally obligating companies to engage in welfare initiatives. CSR-1 form serves as a means for organizations to apply for CSR funding from corporate entities through implementing agencies. The form named CSR-1 is referred to as Form for <q>Registration of Entities for undertaking CSR Activities</q>.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents Required</li>
                            </a>
                            <a href="#ProcedureCsr" className="scrollTo">
                             <li>Procedure to File CSR </li>
                            </a>
                            <a href="#FactsCsr" className="scrollTo">
                             <li>Facts About CSR</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps you in the Registration process</li>
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
                <p className="small-heading text-center">CSR Registration</p>
                <div>
                    <Image alt="CSR Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}