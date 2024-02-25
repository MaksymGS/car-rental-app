import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/fetchingData.js';
import { ItemCar } from 'components/ItemCar/ItemCar.jsx';
import { ListWrapper, LoadMoreBtn } from './CatalogList.styled.js';
import { useSearchParams } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar.jsx';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const { /*isLoading, error,*/ items } = useSelector(state => state.adverts);
  // console.log(items);
  const [params, setParams] = useSearchParams();

  const loadMore = () => {
    let numPage = Number(params.get('page') ?? 1);
    numPage += 1;
    params.set('page', numPage);
    setParams(params);
  };

  useEffect(() => {
    dispatch(fetchAdverts(params));
  }, [dispatch, params]);

  return (
    <>
      <AppBar />
      <ListWrapper>
        {items.map(item => (
          <ItemCar key={item.id} item={item} />
        ))}
      </ListWrapper>
      {items.length >= 12 && (
        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
};
