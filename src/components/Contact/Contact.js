import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Button,
 Text
} from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Text
      as="li"
      key={id}
      color="#D71868"
      fontSize="16px"
      fontFamily="Raleway, sans-serif"
      fontWeight="400"
    >
      {name}:<span>{number}</span>
      <Button
        as="button"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        border="2px"
        borderColor="#FF9BAA"
        bg="#FFCBDB"
        color="#D71868"
        m="0 auto"
      >
        Delete
      </Button>
    </Text>
  );
};
