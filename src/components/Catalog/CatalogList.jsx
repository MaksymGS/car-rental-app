import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/fetchingData.js';
import { ItemCar } from 'components/ItemCar/ItemCar.jsx';
import { ListWrapper } from './CatalogList.styled.js';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const { /*isLoading, error,*/ items } = useSelector(state => state.adverts);
  // console.log(items);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <ListWrapper>
        {items.map(item => (
          <ItemCar key={item.id} item={item} />
        ))}
      </ListWrapper>
    </>
  );
};
