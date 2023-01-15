import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Contacts() {
  return (
    <Box
      as="div"
      w="512px"
      h="700px"
      bg="linear-gradient(45deg, #E28090, #FADADD, #FDBDBA)"
      p="16px"
      textAlign="center"
      m="10px auto"
      borderRadius="10px"
      boxShadow="24px 20px 31px 0px rgba(242, 120, 147, 0.2)"
      lineHeight="1.8"
    >
      <Flex as="div" alignItems="center" justifyContent="center">
        <Heading
          as="h1"
          color="#D71868"
          fontSize="24px"
          fontFamily="Raleway, sans-serif"
          fontWeight="400"
          mr="15px"
        >
          Phonebook
        </Heading>
        <AiOutlineApple color="#D71868" fontSize="3em" />
      </Flex>
      <ContactForm />
      <Flex as="div" alignItems="center" justifyContent="center">
        <Heading
          as="h2"
          color="#D71868"
          fontSize="24px"
          fontFamily="Raleway, sans-serif"
          fontWeight="400"
          mr="15px"
        >
          Contacts
        </Heading>
        <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
      </Flex>
      <Filter />
      <ContactList />
    </Box>
  );
}
