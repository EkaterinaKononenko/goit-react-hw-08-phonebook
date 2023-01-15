import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from 'redux/contacts/slice';
import { selectValueFilter } from 'redux/contacts/selectors';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectValueFilter);
  const dispatch = useDispatch();

  return (
    <FormControl
      as="div"
      color="#D71868"
      fontSize="16px"
      fontFamily="Raleway, sans-serif"
      fontWeight="700"
    >
      <FormLabel
        as="div"
        htmlFor="filter"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        Find contacts by name
      </FormLabel>
      <Input
        as="input"
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
        border="2px"
        borderColor="#FF9BAA"
        borderRadius="5px"
        bg="#FFCBDB"
        color="#D71868"
        outline="none"
        w="256px"
      />
    </FormControl>
  );
};
