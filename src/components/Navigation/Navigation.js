import {NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link
        as={NavLink}
        to="/"
        display="inline-block"
        textDecoration="none"
        p="12px"
        fontWeight="700"
        color="#2a363b"
        border="1px"
        borderRadius="5px"
        borderColor="#0000FF"
        fontSize="20px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
        size="md"
        _hover={{
          background: 'purple.400',
          color: 'purple.100',
          border: '3px',
          borderColor: '#0000FF',
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          display="inline-block"
          textDecoration="none"
          p="12px"
          fontWeight="700"
          color="#2a363b"
          border="1px"
          borderRadius="5px"
          borderColor="#0000FF"
          fontSize="20px"
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}
          size="md"
          _hover={{
            background: 'purple.400',
            color: 'purple.100',
            border: '3px',
            borderColor: '#0000FF',
          }}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};

