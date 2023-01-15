import { Flex, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      as="div"
      minH="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="h1" fontWeight="500" fontSize="48" textAlign="center">
        Task manager welcome page{' '}
        <Text as="span" role="img" aria-label="Greeting icon">
          💁‍♀️
        </Text>
      </Text>
    </Flex>
  );
}
