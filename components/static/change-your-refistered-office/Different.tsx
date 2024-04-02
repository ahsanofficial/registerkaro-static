
interface HeroProps {
    cityName: string;
}
const Different = ({ cityName }: HeroProps) => {
  return (
    <div id="Different">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-7">
            <h5><strong> 1. Change in Registered Office Address with a Different RoC but within the State </strong></h5>
            If the Company wants to change the registered office from the jurisdiction of one RoC to another then the Company must apply for the approval of the Regional Director as mentioned in Form INC-23. After the Regional Director ensures the change your registered office address, then the confirmation must be filed with the Registrar of Companies within 60 days. Within 30 days of filing, the Registrar of Company shall confirm the address change of the Company.

            <h5><strong> 2. Address change in the same state but different RoC</strong></h5>
            In big states like Tamil Nadu & Maharashtra, there are 2 ROC. At times it may happen when the company address is changed the Registrar of Companies also changes. Hence, there is a different procedure when such changes happen.

            <h5><strong> 3. Change in the registered office within the same city: The process to change the registered office in the same city is very simple.</strong></h5>
            <div className="ps-5">
            <h6><strong> 1. </strong>First, the company must arrange a Board Meeting & pass a Resolution regarding the same;</h6>
            <h6><strong> 2. </strong>The company must file a Form INC-22 with the Ministry of Corporate Affairs and it should be filed within 30 days of passing the Board Resolution;</h6>
            <h6><strong> 3. </strong>Latest utility bills for address proof of the business or company, NOC from the owner & the Rental Agreement is the place is rented should be attached.</h6>
            </div>
           <h5><strong> 4.  Change of address in another state</strong></h5>
            The procedure of shifting the registered office from one state to another is different from others. The Memorandum of Association of the Company changes as the registered office address also changes.
           <div className="ps-5">

            <h6><strong> 1. </strong>It is important to hold a Board Meeting & pass a resolution to conduct EGM (Extraordinary General Meeting);</h6>
            <h6><strong> 2. </strong>A Special Resolution must be passed in the EGM regarding the change of the registered office address and for changing the Memorandum of Association. The resolution must be filed in MGT-14 within 30 days with the Ministry of Corporate Affairs;</h6>
            <h6><strong> 3. </strong>The Company has to publish an ad for shifting the office not more than 30 days before the date of application to the Regional Director. It must be published in the regional newspaper & in an English Newspaper;</h6>
            <h6><strong> 4. </strong>The Company should also send a notice to the debentures holders & creditors if there are any other regulatory bodies as applicable to the Company;</h6>
            <h6><strong> 5. </strong>An application to the Regional Directors must file for shifting the registered office along with the documents that are mentioned;</h6>
            <h6><strong> 6. </strong>In case an objection is received, then there is a hearing with the Central Government & important orders will be passed. If no objection is received, then the order will be passed without any hearing;</h6>
            <h6><strong> 7. </strong>The confirmation received raised from the Regional Director to the Registrar of Companies is to be filed by the Company within 30 days from the order date;</h6>
            <h6><strong> 8. </strong>Within 30 days it is vital to file Form INC-22 to the Registrar of Companies with the required documents.</h6>
            </div>
        </div>
      </div>
      <p className="main-para pt-5">The Central Government of {cityName} should dispose of the change of the registered office application outside the state within 60 days of the application & before passing the Resolution it should confirm that the change is with the consent of the debenture holder, creditors, etc. The approval by the Central Government shall be filed with the Registrars of both states. The RoC (Registrar of Companies) of the state wherein the new office will be located has to register the same & new Certificate of Incorporation should be issued.</p>
    </div>
  );
};

export default Different;


