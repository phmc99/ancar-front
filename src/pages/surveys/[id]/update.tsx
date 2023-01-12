import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SurveyQuestionCreateBox from '../../../components/SurveyQuestionCreateBox';
import UpdateSurveyQuestion from '../../../components/UpdateSurveyQuestion';

const CreateSurvey = () => {
  const [updateQuestion, setUpdateQuestion] = useState<boolean>(false);

  const handleUpdateNewQuestion = () => {
    setUpdateQuestion(!updateQuestion);
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Survey {router.query.id}</title>
        <meta name="description" content="Ancar" />
      </Head>

      {updateQuestion ? (
        <UpdateSurveyQuestion setToggle={handleUpdateNewQuestion} />
      ) : null}
      <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
        <Flex
          h={[320, 380]}
          w={[320, 380]}
          direction="column"
          alignItems="center"
          bgColor="whitesmoke"
          p={[2, 5]}
        >
          <Heading size={'sm'}>#{router.query.id}s</Heading>
          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            mt={3}
            w="95%"
            placeholder="Nome"
            variant="filled"
            name="name"
            value={'123'}
          />
          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Descrição"
            variant="filled"
            name="description"
            value={'123'}
          />
          <Heading size={'md'}>Perguntas</Heading>
          <Flex
            direction="column"
            alignItems="center"
            overflowY="scroll"
            bgColor="whiteAlpha.800"
            w="90%"
            maxHeight="40%"
            gap={2}
            p={2}
            mb={3}
            borderRadius={5}
          >
            <SurveyQuestionCreateBox
              description={'Pergunta 1'}
              onClick={handleUpdateNewQuestion}
            />
            <SurveyQuestionCreateBox
              description={'Pergunta 1'}
              onClick={handleUpdateNewQuestion}
            />
            <SurveyQuestionCreateBox
              description={'Pergunta 1'}
              onClick={handleUpdateNewQuestion}
            />
          </Flex>
          <Button alignSelf={['flex-end', 'center']} colorScheme="green">
            Criar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateSurvey;
