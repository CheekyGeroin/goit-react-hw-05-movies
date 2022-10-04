import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchItem);

    setSearchItem('');
  };

  const handleChange = e => {
    setSearchItem(e.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={searchItem} />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
