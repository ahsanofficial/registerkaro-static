import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import ZohoFormService from '../../child_components/ZohoformService';

import { GoogleDiv } from '../GoogleDiv';


export const Checkbonuces = () => {
    return (
        <div style={{ border: 'none' }} className="hero align-center mobile-flex-column" >
            
            <div className="header-content text-black ">
            <h1 className='mb-4'>Understanding the Cheque Bounces</h1>

                <p >Our everyday use of technology has had a significant impact on how we conduct financial transactions. For many people, executing financial transactions has become more convenient and effective with the introduction of digital payment methods. Digital payments provide a faster way to complete transactions—no more standing in line or fretting about misplacing paper cheques. With just a few smartphone touches, we can now make payments and transfer money, simplifying and speeding up banking operations. But even with the ease of digital payments, many people still prefer to trade financially with cheques. For many years, people have regarded cheques as a secure way to send money and make purchases. However, there is a chance of a “bounce” or “dishonor” when using cheques. A “dishonored cheque” is one that the bank has returned for any number of reasons; this can lead to fines, penalties, or even jail time which is conveyed to the other faulted through cheque bounce notice.
                  <br/>
                  <br/>

                 A cheque is a formal promise made in exchange for a certain amount of money from the payer (the person writing the cheque) to the payee (the person receiving it). Ideally, money is transferred from the payer’s account to the payee’s account by the payer’s bank. Nevertheless, there are instances in which the bank of the payer or the bank of the payee declines to honor this agreement. There could be several causes for this “decline.” When this happens, the cheque bounces and is referred to as a “bounced cheque .”</p>

            <h2 className='mb-4'>What is cheque Bounce Notice ? </h2>  
            <p>
            According to Section 138 of the Negotiable Instruments Act, 1881 (“Act”), bouncing a cheque is a crime that carries a maximum two-year jail sentence, a fine up to double the value of the cheque , or both. A cheque is said to have bounced when the payee delivers it to the bank for payment and it is returned unpaid with a memo stating there are not enough funds.
           <br/><br/>
          A cheque bounce can happen for a number of reasons, but it becomes an offense under the Act if the bounce is caused by insufficient money in the drawer’s account. The cheque that is being presented for payment must be rejected by the bank with a return memo indicating that there are not enough funds. In this situation, the cheque’s payee may send the drawer a notice requesting payment of the cheque amount, known as a “cheque bounce.”
            </p>

                <h1 className='mb-4'>Cheque Bounce Notice vis-a-vis Negotiable<br/> Instrument Act</h1>
                <p><span style={{ fontWeight: 'bold' }}>Section 138:</span> According to Section 138 of the Negotiable Instruments Act, bouncing a cheque due to insufficient money is considered an offense and is subject to jail. It states that if someone writes a cheque on an account they own to pay someone else and the bank returns the cheque unpaid because there aren’t enough funds to cover the cheque, the person who wrote the cheque has committed an offense.</p>
                <p><span style={{ fontWeight: 'bold' }}>Section 144:</span> In accordance with Section 144 of the Negotiable Instruments Act, any individual in charge of the firm’s operations at the time the offense was committed is liable for any cheque that bounced. This includes cheque that the company issues. According to this provision, it is illegal for a company’s cheque drawer to bounce due to inadequate cash.</p>
<br/>
<br/>
            <h2 className='mb-4'>When do you receive a notice for Cheque Bounce?</h2>
           <p>There are several reasons why a cheque would bounce. The most frequent explanation is that when the cheque was offered for payment, the payer did not have enough money in their savings account. A “bounce due to insufficient funds” is what is meant by this. cheque bounces can also occur for the following reasons:</p>
          <br/>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Insufficient Balance</span>  When the account balance is insufficient for the cheque to be encashed, then in such scenario it is expected to receive a notice for cheque bounce</p>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Expired Cheques:</span>The cheque will be returned unpaid if it is presented for payment after the specified date</p>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Signature mismatch:</span>  A cheque will be returned unpaid if the signature on it does not correspond to the one on file with the bank</p>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Payer Disagreement:</span>  The cheque will bounce if the payer asks the bank to stop paying on it</p>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Account number mismatch:</span>  The cheque will be returned unpaid if the account number on the cheque does not match the account number of the payer.</p>
          <p><span style={{ fontWeight: 'bold' }}><span>&#8226;</span>Damaged Cheques:</span>  The cheque will be returned unpaid if the account number on the cheque does not match the account number of the payer.</p>


            </div>

            <div className="zoho">
                <ZohoFormService service={'private-limited-company-registration'} />
            </div>
        </div>
    )
}
