interface HeroProps {
    cityName: string;
}
const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div id="Eligibility">
        <p className="main-para">Following is the criteria to become a Director of a Company:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>An Individual’s age should be above 21 years & below 70 years;</p>
            <p><strong>2 : </strong>The individual shouldn’t be an undischarged insolvent;</p>
            <p><strong>3 : </strong>There shouldn’t be any order in force passed by a Court or Tribunal disqualifying the person for the appointment of a Director;</p>
            <p><strong>4 : </strong>An individual shouldn’t have been convicted by a court of an offence & sentenced to imprisonment for more than 6 months & a period of 5 years should have elapsed from the expiry of the sentence;</p>
            <p><strong>5 : </strong>An individual shouldn’t have applied to be adjudicated as an insolvent;</p>
            <p><strong>6 : </strong>There shouldn’t be any order in force passed by a Court or Tribunal disqualifying the individual for Director’s appointment;</p>
            <p><strong>7 : </strong>The person must have DIN & DSC;</p>
            <p><strong>8 : </strong>An individual shouldn’t have been convicted of the offence dealing with related party transactions under Section 188 at any time during the preceding 5 years;</p>
            <p><strong>9 : </strong>The person or an individual shouldn’t be appointed as a Director in more than 19 companies or 9 companies in the case of public companies since the maximum numbers of company in which a person or an individual can act as a Director is 20 companies or 10 companies in the case of public companies;</p>
            <p><strong>10 : </strong>An individual can’t be appointed as a Director if he or she is a Director in the following companies:</p>
            <ul>
                <li>A Company that has failed to repay the deposits, interest on deposits, failed to redeem any debentures on the due date, pay interest on debentures, or pay the dividend declared for more than 1 year;</li>
                <li>A Company that hasn’t filed financial statements/annual returns for a continuous period of 3 Financial Year.</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Eligibility;


