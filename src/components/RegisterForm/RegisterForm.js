import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button
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
    <FormControl as="form" w="320px" onSubmit={handleSubmit}>
      <FormLabel as="label" display="flex" flexDirection="column" mb="16px">
        Username
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel as="label" display="flex" flexDirection="column" mb="16px">
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel as="label" display="flex" flexDirection="column" mb="16px">
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit">Register</Button>
    </FormControl>
  );
};
