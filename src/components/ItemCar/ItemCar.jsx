import React, { useState } from 'react';
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
import Modal from 'react-modal';
import { ModalDetails } from 'components/Modal/ModalDetails';
import '../Modal/ModalDetail.css';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/favoriteSlice.js';

Modal.setAppElement('#root');

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(addFavorite(item));
  };
  return (
    <li>
      <CardWrapper>
        <Thumb>
          <Img src={img} alt={`${make} - ${model}`} />
        </Thumb>
        <FavoriteToggle onClick={handleAddFavorite}>
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
        <Button onClick={openModal}>Learn more</Button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName={'modal-overlay'}
          className={'modal-content'}
          closeTimeoutMS={300}
        >
          <ModalDetails onCloseModal={closeModal} carDetail={item} />
        </Modal>
      </CardWrapper>
    </li>
  );
};
