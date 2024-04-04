import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-cfo-services/Types_of_Virtual_CFO_services.svg";

const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">
        The following are the different types of Virtual CFO Services:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Types of Virtual CFO services"
            className="Types-img w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Business Plan Services : </strong>
            One of the major contributions in the business plan generation is of
            that of a CFO. Therefore, when the matter is of the expansion of the
            business or even starting a new business, business plan is the first
            thing you will need. Virtual CFO helps in generating a efficient
            plan matching your requirements, and needs of your business, on the
            basis of the accounting, and financial reports.
          </p>

          <p>
            <strong>Financial Budgeting Services : </strong>
            Another form of services offered by a Virtual CFO is the financial
            Budgeting services where the VCFO assist in monitoring and recording
            the financial health of the business. Based on the data, then a
            report is generated covering all aspects of business-like profit,
            loss, expenditure, revenue, manpower, etc., so that the business
            financial trajectory can be evaluated and reprojected in minimum
            input of resources.
          </p>

          <p>
            <strong>Accounting Services : </strong>
            Accounting is the most crucial tangent of any business, which
            requires time to time evaluation for better financial resource
            optimization. Being a critical aspect, it requires guidance in its
            best level to generate the quantifiable results. Here comes the role
            of a Virtual CFO who assist business in terms of maintain,
            recording, evaluating, and regenerating the accounting department of
            the business, to avoid leaks and crack in the business operations.
          </p>

          <p>
            <strong>Cashflow Planning Services : </strong>
            Without any doubt, accounting, and budgeting is a delicate part of
            any business success, a little disruption in which can cause a huge
            setback in the business. However, this road of budgeting to
            execution, requires a diligent and strong cashflow planning. It is
            important to make sure that the planning is done under an expert
            guidance as it involves many intricacies, and delicacies of the
            business, mishandling of which can cause damage. Therefore,
            companies hire Virtual CFO for cashflow planning services owing to
            their expertise and skills which helps business in attaining the
            targeted growth.
          </p>

          <p>
            <strong>Financial Modelling Services : </strong>
            Generally, financial models are designed and depended upon to assist
            you in proceeding with company decisions. Robust financial models
            furnish valuable insights that enable you to examine the monetary
            ramifications of strategic choices and bolster organization plans or
            investment choices. Virtual CFO has the ability to enhance your
            project by optimizing the usefulness of your Financial Model as a
            tool for making decisions. A comprehensive assessment from an
            accounting and tax viewpoint is generated by a Virtual CFO to
            support the Financial Model.
          </p>

          <p>
            <strong>Revenue Growth planning : </strong>
            In the fiercely competitive business world of today, organizations
            are always looking for new and creative ways to increase sales and
            obtain a competitive advantage. Revenue Growth Planning is one such
            tactic that has attracted a lot of interest lately. In order to
            increase sales and improve profitability, revenue growth management
            is a data-driven strategy that focuses on optimizing trade spend,
            assortment, price, and promotions. To make this theory a full
            fledged practical, a Virtual CFO is required who assist a business
            in all aspects such a as accounting, budgeting, modelling, etc., to
            foster the Revenue growth of the business.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Types;
