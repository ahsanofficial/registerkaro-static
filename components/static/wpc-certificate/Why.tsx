interface HeroProps {
  cityName: string;
}
export const Why = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyReg">
      <p className="main-para">The following devices fall under the WPC mandatory products list:</p>
      <div className="benefits flex   w-80 m-auto mobile-flex-column">
      
      {/* <div className="flex w-100"> */}
        <div className="flex-4 left p-0 m-0">
          <p><strong>1. </strong> Blueooth Devices</p>
          <p><strong>2. </strong>Wi-Fi router</p>
          <p><strong>3. </strong>Smart Speaker</p>
          <p><strong>4. </strong> Smart Switch</p>
          <p><strong>5. </strong> Smart TV</p>
          <p><strong>6. </strong> Walkie-Talkie</p>
          <p><strong>7. </strong> Wireless Repeater</p>
          <p className="p-0 m-0"><strong>8. </strong> Wireless Receiver</p>
        </div>
            <span className="line p-0 m-0">
            </span>
        <div className="flex-4 right ">
          <p ><strong>9. </strong> Wireless Terminal</p>
          <p><strong>10. </strong>Wireless Mouse</p>
          <p><strong>11. </strong>Wireless Transmitter</p>
          <p><strong>12. </strong>Wireless Pen drive</p>
          <p><strong>13. </strong>Wireless Camera</p>
          <p><strong>14. </strong>Wireless Nano USB</p>
          <p><strong>15. </strong>Wireless Microphone</p>
          <p><strong>16. </strong>Hotspot Devices </p>
          <p><strong>17. </strong>Drones</p>
        </div>
        </div>
     
      {/* </div> */}
    </div>
  );
};
