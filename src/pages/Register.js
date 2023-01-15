import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Heading } from '@chakra-ui/react';

export default function Register() {
  return (
    <Box
      as="div"
      m="0 auto"
      backgroundColor="#B0E0E6"
      w="400px"
      borderRadius="10px"
      boxShadow="dark-lg"
    >
      <Helmet>
        <Heading>Registration</Heading>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}
