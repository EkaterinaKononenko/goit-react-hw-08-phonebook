import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Heading } from '@chakra-ui/react';

export default function Register() {
  return (
    <Box as="div">
      <Helmet>
        <Heading>Registration</Heading>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}
