import React from 'react';

export const ItemCar = ({
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
}) => {
    console.log(make);
  return (
    <li>
      <h4>
        {make} | {model} | {year}
      </h4>
    </li>
  );
};
