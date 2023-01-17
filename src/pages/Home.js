import { Flex, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      as="div"
      minH="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#F0F0F0"
    >
      <Text
        as="h1"
        fontWeight="500"
        fontSize="60px"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        Phonebook welcome page{' '}
      </Text>
    </Flex>
  );
}
