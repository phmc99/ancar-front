/* eslint-disable prettier/prettier */
import { Button, Flex, FormControl, Heading, Text } from '@chakra-ui/react';
import ResponseBox from '../../../components/ResponseBox';
import { AppState } from '../../../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { ISurvey } from '../../../types';

const ResponsePage = () => {
  const { data } = useSelector((state: AppState) => state.survey);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [survey, setSurvey] = useState<ISurvey | null | undefined>(
    data?.data.find(item => item.cod === router.query.id),
  );

  const handleBackToSurveys = () => {
    Router.push(`/surveys`);

  };

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
          <Button onClick={handleBackToSurveys} size={"xs"} variant="link">Voltar</Button>
          <Heading>{survey?.name}</Heading>
          <Text>
            {survey?.description}
          </Text>
          <FormControl textAlign={['right', 'center']} mt={3} w={'100%'}>
              {survey?.questions.map((item, index) => (
                <ResponseBox key={index} description={item.description} />
              ))}
            <Button colorScheme="green">Enviar Respostas</Button>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default ResponsePage;
