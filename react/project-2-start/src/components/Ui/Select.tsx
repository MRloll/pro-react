'use client';

import { type ChangeEvent } from 'react';
import { categories } from '../../data';
import type { ICategory } from '../../interfaces';

interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}

export default function Example({ selected, setSelected }: IProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = categories.filter((item) => {
      if (item.id == e.target.value) {
        return item;
      }
    });
    setSelected(category[0]);
  };

  return (
    <div>
      <select
        className="border border-gray-300 rounded p-3 w-full"
        id="fruit-select"
        value={selected.id}
        onChange={handleChange}
      >
        <option value="">-- Select a fruit --</option>
        {categories.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
}
