import { Flex, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      as="div"
      minH="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#B0E0E6"
    >
      <Text as="h1" fontWeight="500" fontSize="48" textAlign="center">
        Phonebook welcome page{' '}
        <Text as="span" role="img" aria-label="Greeting icon">
          💁‍♀️
        </Text>
      </Text>
    </Flex>
  );
}
