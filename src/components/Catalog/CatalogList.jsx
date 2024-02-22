import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/fetchingData.js';
import { ItemCar } from 'components/ItemCar/ItemCar.jsx';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, items } = useSelector(state => state.adverts);
  console.log(items);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {items.map(
          ({ id, make, model, year, rentalPrice, address, rentalCompany }) => (
            <ItemCar key={id} make={make} model={model} year={year}/>
          )
        )}
      </ul>
    </>
  );
};
