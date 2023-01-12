import { Button, Flex, FormControl, Heading, Text } from '@chakra-ui/react';
import ResponseBox from '../../../components/ResponseBox';

const ResponsePage = () => {
  return (
    <>
      <Flex
        w={'100vw'}
        h={'100vh'}
        justifyContent="center"
        alignItems={'center'}
      >
        <Flex
          alignItems={'center'}
          direction="column"
          w={'50%'}
          h={'90%'}
          bgColor="whitesmoke"
          p={5}
          overflowY={'scroll'}
        >
          <Heading>Title</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quod
            repellat dicta facere dolore molestiae blanditiis optio earum, ut
            quae modi aspernatur asperiores possimus repudiandae eligendi sit
            magni excepturi commodi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia nostrum quae, dolorum eum sapiente delectus
            odit odio. Ullam provident et nesciunt dicta modi alias enim, minus
            aliquam, mollitia laboriosam quo.
          </Text>
          <FormControl textAlign={['right', 'center']} mt={3} w={'100%'}>
            <ResponseBox />
            <ResponseBox />
            <ResponseBox />
            <ResponseBox />
            <Button colorScheme="green">Enviar Respostas</Button>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default ResponsePage;
