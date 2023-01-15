import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl as="form" w="320px" onSubmit={handleSubmit}>
      <FormLabel as="label" display="flex" flexDirection="column" mb="16px">
        Email
        <Input as="input" type="email" name="email" />
      </FormLabel>
      <FormLabel as="label" display="flex" flexDirection="column" mb="16px">
        Password
        <Input as="input" type="password" name="password" />
      </FormLabel>
      <Button as="button" type="submit">
        Log In
      </Button>
    </FormControl>
  );
};
