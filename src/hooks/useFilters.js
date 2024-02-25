import { useSearchParams } from 'react-router-dom';

export const useFilters = () => {
  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeModel = evt => {
    params.set('search', evt.target.value);
    params.set('page', '1');
    setParams(params);
  };

  return {
    search,
    changeModel,
  };
};
