import React from 'react';
import { useFilters } from 'hooks/useFilters';
import { Select, SelectBrand } from './SaerchByModels.styled';
import { Label } from '../SearchByPrice/SearchByPrice.styled';

export const SearchByModels = () => {
  const { search, changeModel } = useFilters();

  const models = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  return (
    <SelectBrand>
      <Label htmlFor="brand">Car brand</Label>
      <Select name="brand" value={search} onChange={changeModel}>
        <option value="">Choose car</option>
        {models.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </SelectBrand>
  );
};
