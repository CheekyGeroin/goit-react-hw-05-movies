import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, onChange }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchItem);
    onChange(searchItem);

    setSearchItem('');
  };

  const handleChange = e => {
    setSearchItem(e.currentTarget.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} value={searchItem} />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
