import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/investment-pitch-deck-for-business/one.svg";

const InvestorDeck = () => {
  return (
    <div id="InvestorDeck">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Investor Deck vs Pitch Deck"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>The issue at hand. Do not mistake this for irritation or mild discomfort. In order for the narrative to be effective, the issue must be significant, unpleasant, and pressing. And always remember that it must be an issue that actual individuals face. Express it in basic, widely understood language.</p>
            <p><strong>2. </strong>The answer. This may not be your answer, but it's the answer that everyone wishes for. Everyone in the crowd should be agreeing, believing it is a clever solution to the problem. Your method or way of doing something. This is the answer to your problem. It must be evident right away that your solution exceeds the audience's expectations.</p>
            <p><strong>3. </strong>Proposition of value. When transitioning from the issue to your impressive resolution, ensure to clearly demonstrate that your upcoming launch will provide immense value to society. Subsequent actions. After capturing your audience's enthusiasm, make sure not to let the energy go to waste. Provide them with a recommended action, a contact number, and an online form to complete.</p>
            <p><strong>4. </strong>Overview of the company. Could you tell me the name of your company? What is your occupation? How many of you engage in this activity? For how much time have you been engaging in it? Important information about your company purpose / aspiration. </p>
            <p><strong>5. </strong>What kind of impact are you attempting to make in the world? What will your company appear as once you have reached that objective. Group. Having the appropriate individuals in suitable positions significantly increases your likelihood of success. </p>
            <p><strong>6. </strong>Explain to the investor the reasons for having each team member on board. Feature images, headings, and brief bios of every team member. Adding advisors and board members can enhance credibility.</p>
            <p><strong>7. </strong>The issue. According to the presentation slides. The answer. According to the presentation slides. Audience's imagined solution: It is essential to consider the solution that your audience would expect or envision. Created solution: It is crucial to present the innovative solution that you have developed in response to the audience's needs. </p>
            <p><strong>8. </strong>The chance for business in the market. Investors seek to invest in significant opportunities with expansive target markets. Specify the industry you operate in, determine the total value of the market, and show how you will capture a significant portion of that market. </p>
            <p><strong>9. </strong>The clientele. Having customers increases your credibility. Display their logos.</p>
            <p><strong>10. </strong>The advancement in technology. Furthermore, technology that belongs to you as your intellectual property. The contest. Explain the fundamental technology, outline any intellectual property safeguards (patents, etc), and provide reasoning for why your technology is superior and hard to copy. </p>
            <p><strong>11. </strong>You can report on initial sales, website traffic, app downloads, growth metrics, partnerships, press coverage, and testimonials – all showing that your idea is successful. If you can, explain how traction will be speeded up.</p>
            <p><strong>12. </strong>Model of operation or functioning in business. Investors will need to grasp how your business generates revenue, what pricing strategy you use, the lifetime value of a customer, and your customer acquisition channels and costs.</p>
            <p><strong>13. </strong>Plan for promoting and selling products or services. The supplement for your business strategy. What methods of promotion will you utilize, how you present your promotional materials, and the results of your promotional efforts.</p>
            <p><strong>14. </strong>Finances. Investors will seek to comprehend the company’s present financial status and projected future expenditure rate. Provide forecasts for the next three to five years, details on unit economics, the rate at which cash is being spent, important metrics such as annual recurring revenue, overall revenue and expenses, EBITDA, and crucial underlying assumptions. Ensure that your numbers are practical. Astute investors will be closely monitoring.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorDeck;


