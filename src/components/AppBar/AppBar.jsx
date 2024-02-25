import { SearchBar } from './AppBar.styled';
import { SearchByModels } from './SearchByModels/SearchByModels';
import { SearchByPrice } from './SearchByPrice/SearchByPrice';

export const AppBar = () => {
  return (
    <SearchBar>
      <SearchByModels />
      <SearchByPrice />
    </SearchBar>
  );
};
