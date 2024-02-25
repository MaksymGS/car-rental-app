import React from 'react';
import {
  Button,
  CarModel,
  CarModelInfo,
  CarModelPrice,
  CardWrapper,
  FavoriteToggle,
  IconFavorite,
  Img,
  Information,
  Price,
  Thumb,
} from './ItemCar.styled';
import sprite from '../../images/icons.svg';

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
    type,
  } = item;
  // console.log(make);
  return (
    <li>
      <CardWrapper>
        <Thumb>
          <Img src={img} alt={`${make} - ${model}`} />
        </Thumb>
        <FavoriteToggle>
          <IconFavorite>
            <use xlinkHref={`${sprite}#icon-favorite`}></use>
          </IconFavorite>
        </FavoriteToggle>
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
