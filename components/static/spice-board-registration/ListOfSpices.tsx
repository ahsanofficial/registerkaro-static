import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/spice-board-registration/two.svg";

export const ListOfSpices = () => {
  return (
    <div id="ListOfSpices">
      <div className="listOfSpices flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5">
          <p><strong>1.</strong> KOKAM</p>
          <p><strong>2.</strong> MINT</p>
          <p><strong>3.</strong> HORSE-RADISH</p>
          <p><strong>4.</strong> CAPER</p>
          <p><strong>5.</strong> CLOVE</p>
          <p><strong>6.</strong> ASAFETIDA</p>
          <p><strong>7.</strong> CAMBODGE</p>
          <p><strong>8.</strong> HYSSOP</p>
          <p><strong>9.</strong> JUNIPER BERRY</p>
          <p><strong>10.</strong> BAY LEAF</p>
          <p><strong>11.</strong> CARDAMOM</p>
          <p><strong>12.</strong> PEPPER</p>
          <p><strong>13.</strong> MUSTARD</p>
          <p><strong>14.</strong> PARSLEY</p>
          <p><strong>15.</strong> POMEGRANATE SEED</p>
          <p><strong>16.</strong> SAFFRON</p>
          <p><strong>17.</strong> VANILLA</p>
          <p><strong>18.</strong> TEJ PATTA</p>
          <p><strong>19.</strong> PEPPER LONG</p>
          <p><strong>20.</strong> STAR ANISE</p>
          <p><strong>21.</strong> SWEET FLAG</p>
          <p><strong>22.</strong> GREATER GALANGA</p>
          <p><strong>23.</strong> SWEET FLAG</p>
          <p><strong>24.</strong> CHILLY</p>
          <p><strong>25.</strong> GINGER</p>
          <p><strong>26.</strong> TURMERIC</p>
          <p><strong>27.</strong> CUMIN</p>
          <p><strong>28.</strong> FENNEL</p>
          <p><strong>29.</strong> FENUGREEK</p>
          <p><strong>30.</strong> CELERY</p>
          <p><strong>31.</strong> ANISEED</p>
          <p><strong>32.</strong> BISHOPS WEED</p>
          <p><strong>33.</strong> CARAWAY</p>
          <p><strong>34.</strong> DILL</p>
          <p><strong>35.</strong> CINNAMON</p>
          <p><strong>36.</strong> CASSIA</p>
          <p><strong>37.</strong> CURRY LEAF</p>
          <p><strong>38.</strong> LOVAGE</p>
          <p><strong>39.</strong> MARJORAM</p>
          <p><strong>40.</strong> NUTMEG</p>
          <p><strong>41.</strong> MACE</p>
          <p><strong>42.</strong> BASIL</p>
          <p><strong>43.</strong> POPPY SEED</p>
          <p><strong>44.</strong> ALL-SPICE</p>
          <p><strong>45.</strong> ROSEMARY</p>
          <p><strong>46.</strong> SAGE</p>
          <p><strong>47.</strong> CORIANDER</p>
          <p><strong>48.</strong> SAVORY</p>
          <p><strong>49.</strong> THYME</p>
          <p><strong>50.</strong> OREGANO</p>
          <p><strong>51.</strong> TARRAGON</p>
          <p><strong>52.</strong> TAMARIND</p>
        </div>
        <div className="flex-5">
          <Image
            alt="List Of Spices for Registration"
            className="ListOfSpices-img w-100 Importance-img-h-100"
            height={2250}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
