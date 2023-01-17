import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl
      as="form"
      w="320px"
      m="0 auto"
      onSubmit={handleSubmit}
      pt="30px"
      pb="30px"
      isRequired
      autoComplete="off"
    >
      <FormLabel as="label" htmlFor="name" display="flex" fontSize="20px">
        Username{' '}
      </FormLabel>
      <Input
        as="input"
        type="name"
        name="name"
        placeholder="Username"
        borderColor="#0000FF"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      />
      <FormLabel as="label" htmlFor="email" display="flex" fontSize="20px">
        Email{' '}
      </FormLabel>
      <Input
        as="input"
        type="email"
        name="email"
        placeholder="Email"
        borderColor="#0000FF"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      />
      <FormLabel as="label" htmlFor="password" display="flex" fontSize="20px">
        Password{' '}
      </FormLabel>
      <Input
        as="input"
        type="password"
        name="password"
        placeholder="Password"
        borderColor="#0000FF"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      />
      <Button
        as="button"
        type="submit"
        ml="121px"
        mt="10px"
        border="1px"
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
        Register
      </Button>
    </FormControl>
  );
};
