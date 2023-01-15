import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Heading } from '@chakra-ui/react';


export default function Login() {
  return (
    <Box as="div">
      <Helmet>
        <Heading>Login</Heading>
      </Helmet>
      <LoginForm />
    </Box>
  );
}
