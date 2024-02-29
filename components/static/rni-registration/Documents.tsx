import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const Documents = () => {
  return (
    <div id='Documents'>
      <p className='main-para'>The following list of documents is required in order to register a newspaper or publication:
      </p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      <div className='flex-7 '>
      <p><strong>1: </strong>a duplicate of the letter from RNI confirming ownership.</p>
      <p><strong>2: </strong>Declaration (Form-1) submitted by the publisher, fully verified by DM/DC/SDM/JCP/CMM.</p>
      <p><strong>3: </strong>An official agreement between the proprietors of the periodical. If the owners of the printing press and the magazine are not the same, both of their signatures need to be on the agreement that is being submitted.</p>
      <p><strong>4: </strong>one copy of the first edition, volume 1, issue 1. When sending in the periodical’s initial issue, please make sure you have the following: It needs to be released 42 days after the authentication date of the declaration.</p>
      <p><strong>5: </strong>Volume 1, Issue 1 is displayed prominently on the first edition’s front page.</p>
      <p><strong>6: </strong>The issue is printed with the title, page numbers, and full publication date.</p>
      <p><strong>7: </strong>The title and masthead use the same typeface and letter size. Variations must not exceed twenty-five percent.</p>
      <p><strong>8: </strong>Published newspapers and magazines contain public opinion, news, and comments.</p>
      <p><strong>9: </strong>Newspapers and periodicals may only publish content in the languages that RNI has verified.</p>
      </div>
      <div className='flex-4'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="Documents-img w-100" height={450} loading="lazy" src={bft} />
      </div>
     </div>
     <p className='main-para'>It is advisable to refrain from substituting syllables or letters in the title with emoticons, pictures, or symbols. Each duplicate needs to have a complete and correct imprint line. If the publisher or printer is not the owner, a signed copy of the Printer Agreement authorising the owner(s) in writing to allow individual (by name) to make and subscribe statement instead of the owner</p>
    </div>
  )
}
