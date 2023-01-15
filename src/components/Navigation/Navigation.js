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
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};

