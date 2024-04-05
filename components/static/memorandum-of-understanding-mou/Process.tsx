import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A memorandum of understanding (MOU) is a useful document that helps parties come to mutual agreements. It specifies duties and expectations as well as how the parties will collaborate. Before drafting a formal agreement and legally enforceable contract, MOUs are frequently the initial stage.</p>
                <p className='text-justify'>This article will offer a detailed process for creating a workable memorandum of understanding, regardless of whether you are collaborating on a project, going into business together, or participating in any other kind of cooperation.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#NeedMemorandum" className="scrollTo">
                               <li>Why do you need Memorandum of Understanding?</li>
                            </a>
                            <a href="#Points" className="scrollTo">
                               <li>Points to remember while writing a Memorandum of Understanding (MoU)</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                               <li>How RegisterKaro makes your process easier?</li>
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