import React from 'react';
import sprite from '../../images/icons.svg';
import {
  Accessories,
  AccessoriesDescr,
  Button,
  CarModel,
  CarModelInfo,
  CloseButton,
  Description,
  IconClose,
  Img,
  InfoWrapper,
  Information,
  ModalWrapper,
  Thumb,
} from './Modal.styled';

export const ModalDetails = ({ onCloseModal, carDetail }) => {
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
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions
  } = carDetail;
  return (
    <ModalWrapper>
      <InfoWrapper>
        <Thumb>
          <Img src={img} alt={model} />
        </Thumb>
        <CloseButton onClick={onCloseModal}>
          <IconClose>
            <use xlinkHref={`${sprite}#icon-x`}></use>
          </IconClose>
        </CloseButton>
        <CarModelInfo>
          {make} <CarModel>{model}</CarModel>, {year}
        </CarModelInfo>
        <Information>
          {address.split(',', 3).slice(1, 2)} | {address.split(',', 3).slice(2)}{' '}
          | id:{id} | Year:{year} | Type:{type} <br />
          Fuel Consumption:{fuelConsumption} | Engine Size:{engineSize}
        </Information>
        <Description>{description}</Description>
        <Accessories>Accessories and functionalities:</Accessories>
        <AccessoriesDescr>
          {functionalities.map(item => item + ' | ')}
          {accessories.map(item => item + ' | ')}
        </AccessoriesDescr>
        <Accessories>Rental Conditions: </Accessories>
        <AccessoriesDescr>
          {rentalConditions}
        </AccessoriesDescr>
        <Button>Rental car</Button>
      </InfoWrapper>
    </ModalWrapper>
  );
};
