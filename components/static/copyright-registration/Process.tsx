import React from 'react'
import certificate from '../../../assets/images/static/state-fssai-license-registration/FSSAI_Registration_certifiacte.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Copyright is a type of intellectual property protection offered to artistic work. In order to obtain the protection, the owner or the authorized agent on behalf of the owner needs to file for Copyright Registration under the Copyright Act of 1957. Successful copyright registration grants you legal ownership of your creative work in different aspects of work such as books, paintings, music, sound, etc. Copyright Registration offers security to the creative work of the author, which prohibits unwanted and unauthorized copying of the work. Without permission from the creator or author, no one is permitted to utilize the same. The author has the right to get paid if someone uses or modifies his work. The registration of copyrights protects the inventor’s rights from infringement.</p>
                <p className='text-justify'>In India, the registration grants the owner the sole right to distribute, copy, and reproduce the work or to grant permission to another party to do so. It grants a plethora of rights, including public communication, copyright, adaptation, and translation rights. Ideas, processes, operational procedures, and mathematical concepts, however, are not protected by copyright.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Copyright" className="scrollTo">
                                <li>What is Copyright?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Copyright Registration</li>
                            </a>
                            <a href="#Eligible" className="scrollTo">
                                <li>Are you eligible for Copyright Registration?</li>
                            </a>
                            <a href="#CopyRightProcess" className="scrollTo">
                                <li>Process for Copyright Registration</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for Copyright Registration</li>
                            </a>
                            <a href="#HowDoes" className="scrollTo">
                                <li>How does RegisterKaro help you with Copyright Registration?</li>
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
                <p className="small-heading text-center">State FSSAI License Registration Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get Online State FSSAI License Registration in India" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
