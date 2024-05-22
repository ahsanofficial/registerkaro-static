import dft from "../../../assets/images/static/financial-consultancy-services/two.svg";
import Image from 'next/image';

export const WhyRKforFCS = () => {
    return (
        <div id="WhyRKforFCS">
            
            <div className='whyRKforFCS flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Why RegisterKaro is Perfect for Financial Consultancy Services"
                            className="WhyRKforFCS-img w-100 Importance-img-h-100"
                            height={550}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                
                <div className="flex-7">
                    <p>Sufficient communication is key to making sure your clients trust you and feel secure. Consultants generally have strong interpersonal communication abilities. This implies that you are friendly and make your clients feel comfortable during your meetings with them. It is also important for you to simplify and condense potentially complicated information in a way that others can understand and use to make decisions.</p>
                    <p>It is important for you to describe concepts and data in simple terms because your clients may not have the same level of training and experience as you. In conclusion, top consultants generally have impressive listening abilities. Clients seldom appreciate receiving generic information that seems mass-produced. By attentively listening to everything they share with you, you can create a customized strategy that perfectly aligns with their needs and objectives.</p>
                    <p>Financial planning requires examination, forecasting, and strategizing for long periods, yet it is equally vital to pay attention to the minor aspects. Paying close attention to minor details can aid in the collective effort of creating a successful financial strategy, allowing you to notice overlooked aspects. Tiny details may appear unimportant, yet they accumulate gradually and ultimately determine success or failure.</p>
                    <p>Working as a financial consultant frequently involves the evaluation of markets, circumstances, and variables in order to create risk evaluations. Because of the economy's essence, every financial plan carries a certain amount of risk. One of the key responsibilities of a financial consultant is to thoroughly evaluate the risk and provide advice to clients.</p>
                    <p>An unstable economic market that has the potential to impact the outcome of investments is considered a risk. Learning how to predict and minimize these dangers can help you establish trust with your current clients and attract new clients too. Enhancing your ability to evaluate risks is an excellent method to gain the confidence of your customers.</p>
                </div>
                
            </div>
        </div>
    )
}