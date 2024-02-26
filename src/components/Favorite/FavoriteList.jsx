import React from 'react';
import { useSelector } from 'react-redux';
import { ListWrapper } from './FavoriteList.styled';
import { ItemCar } from 'components/ItemCar/ItemCar';

export const FavoriteList = () => {
  const { favorAds } = useSelector(state => state.favorite);
  
  return (
    <>
      <ListWrapper>
        {favorAds.map(item => (
          <ItemCar key={item.id} item={item} />
        ))}
      </ListWrapper>
    </>
  );
};
