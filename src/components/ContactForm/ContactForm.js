import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { customAlphabet } from 'nanoid';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const nanoid = customAlphabet('1234567890abcdef', 10);

let phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
let nameRegExp = /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initualValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 console.log(contacts);

 const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`Contact ${newContact.name} has already been registrated.`);
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initualValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormControl
        as={Form}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="4px"
      >
        <FormLabel
          htmlFor="name"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="4px"
          color="#D71868"
          fontSize="16px"
          fontFamily="Raleway, sans-serif"
          fontWeight="700"
        >
          Name
          <Input
            as={Field}
            type="text"
            name="name"
            id="name"
            border="2px"
            borderColor="#FD7B7C"
            borderRadius="5px"
            bg="#FFCBDB"
            color="#D71868"
            outline="none"
            w="256px"
          />
          <FormErrorMessage color="#DE5D83" name="name" component="div" />
        </FormLabel>
        <FormLabel
          htmlFor="number"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="4px"
          color="#D71868"
          fontSize="16px"
          fontFamily="Raleway, sans-serif"
          fontWeight="700"
        >
          Number
          <Input
            as={Field}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            border="2px"
            borderColor="#FD7B7C"
            borderRadius="5px"
            bg="#FFCBDB"
            color="#D71868"
            outline="none"
            w="256px"
          />
          <FormErrorMessage color="#DE5D83" name="number" component="div" />
        </FormLabel>
        <Button
          as="button"
          type="submit"
          border="2px"
          borderColor="#FF9BAA"
          borderRadius="5px"
          bg="#FFCBDB"
          color="#D71868"
          fontSize="16px"
          fontFamily="Raleway, sans-serif"
          fontWeight="400"
          _hover={{ bg: 'red.300' }}
        >
          Add contact
        </Button>
      </FormControl>
    </Formik>
  );
};
