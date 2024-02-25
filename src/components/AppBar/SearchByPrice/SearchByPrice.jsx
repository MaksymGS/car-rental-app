import React from 'react';
import { Label, Select, SelectPrice } from './SearchByPrice.styled';
import { useFilters } from 'hooks/useFilters';

export const SearchByPrice = () => {
  const { search, changeModel } = useFilters();

  const price = [
    '10$',
    '20$',
    '30$',
    '40$',
    '50$',
    '60$',
    '70$',
    '80$',
    '90$',
    '100$',
    '110$',
    '120$',
    '130$',
    '140$',
    '150$',
  ];

  return (
    <SelectPrice>
      <Label htmlFor="price">Price/ 1 hour</Label>
      <Select name="price" value={search} onChange={changeModel}>
        <option value="">To $</option>
        {price.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </SelectPrice>
  );
};
