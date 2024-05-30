import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>DataBar Barcode: </strong>
                DataBar barcodes are frequently utilized for the purpose of tagging fresh produce. These barcodes have the capacity to store details such as the batch number or expiration date of a product, as well as additional characteristics like weight that are important for the point of sale. Laser scanners commonly read DataBar barcodes, which are frequently utilized in retail settings.
            </li>
            <li><strong>EAN 13 Barcode: </strong>
                The EAN-13 barcode contains a GTIN-13 and is utilized to distinguish single products during retail transactions.
            </li>
            <li><strong>1D Barcode: </strong>
                A 1D barcode, which is also referred to as a linear barcode, is a visual representation that consists of vertical lines and spaces of different widths. Data is encoded horizontally from left to right within the lines and spaces. This particular barcode can contain a maximum of 85 characters. Increasing the amount of data necessitates a higher number of characters.
            </li>
            <li><strong>UPC A Barcode: </strong>
                A linear barcode, also known as a 1D barcode, is a UPC-A barcode. A UPC A barcode consists of 12 digits which are utilized for product and manufacturer identification purposes. UPC-A barcodes, widely utilized in the United States and North America, are employed on a global scale.
            </li>
            <li><strong>2D Barcode: </strong>
                2D stands for two-dimensional and a 2D barcode includes data in both horizontal and vertical directions, unlike traditional barcodes that are black and white vertical lines and have less data capacity. A 2D barcode has a different physical appearance in comparison to a standard linear 1D barcode.
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Types of Barcodes"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
