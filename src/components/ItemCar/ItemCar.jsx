import React from 'react';
import {
  Button,
  CarModel,
  CarModelInfo,
  CarModelPrice,
  CardWrapper,
  Img,
  Information,
  Price,
  Thumb,
} from './ItemCar.styled';

export const ItemCar = ({ item }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    img,
    type
  } = item;
  console.log(make);
  return (
    <li>
      <CardWrapper>
        <Thumb>
          <Img src={img} alt={`${make} - ${model}`} />
        </Thumb>
        <CarModelPrice>
          <CarModelInfo>
            {make} <CarModel>{model}</CarModel>, {year}
          </CarModelInfo>
          <Price>{rentalPrice}</Price>
        </CarModelPrice>
        <Information>
          {address.split(',', 3).slice(1, 2)} | {address.split(',', 3).slice(2)}{' '}
          | {rentalCompany} | {type} | {model} | {id}
        </Information>
        <Button>Learn more</Button>
      </CardWrapper>
    </li>
  );
};
