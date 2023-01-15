import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex as="div" alignItems="center" gap="12px">
      <Box as="div" >
        <Text as="p" fontWeight="700">
          Welcome, {user.name}
        </Text>
        <Text as="p" fontWeight="700">
          {user.email}
        </Text>
      </Box>
      <Button as="button" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
