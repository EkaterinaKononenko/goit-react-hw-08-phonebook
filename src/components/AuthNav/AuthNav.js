import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <div>
      <Link
        as={NavLink}
        to="/register"
        display="inline-block"
        textDecoration="none"
        p="12px"
        fontWeight="700"
        color="#2a363b"
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        display="inline-block"
        textDecoration="none"
        p="12px"
        fontWeight="700"
        color="#2a363b"
      >
        Log In
      </Link>
    </div>
  );
};

