import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In terms of nominal GDP, Italy's economy is predicted to rank fourth in Europe and ninth in the globe between 2016 and 2020. Italy has recently made fresh efforts to project an image of being a friendly destination for foreign investment, both from EU citizens and those without. The process of incorporating an Italian company, which includes getting VAT and opening a bank account, actually takes about 15 working days from the day the incorporation procedure is started. It just takes a few days to open the bank account and a VAT number is received prior to the company's incorporation. For instance, a company can be registered in Italy in a single day, yet it may take several weeks to receive a VAT number.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of starting a Business in Italy</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of companies for Company Registration in Italy</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Company Registration Process in Italy</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Types of Taxes you must know</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Italy?</li>
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
                <p className="small-heading text-center">Company Registration in Italy</p>
                <div>
                    <Image alt="An Overview of Company Registration in Italy" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}