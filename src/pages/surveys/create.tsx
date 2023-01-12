import { Button, Flex, Input } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import NewSurveyQuestion from '../../components/NewSurveyQuestion';
import SurveyQuestionCreateBox from '../../components/SurveyQuestionCreateBox';
import UpdateSurveyQuestion from '../../components/UpdateSurveyQuestion';

const CreateSurvey = () => {
  const [newQuestion, setNewQuestion] = useState<boolean>(false);
  const [updateQuestion, setUpdateQuestion] = useState<boolean>(false);

  const handleCreateNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };
  const handleUpdateNewQuestion = () => {
    setUpdateQuestion(!updateQuestion);
  };

  return (
    <>
      <Head>
        <title>Ancar</title>
        <meta name="description" content="Ancar" />
      </Head>
      {newQuestion ? (
        <NewSurveyQuestion setToggle={handleCreateNewQuestion} />
      ) : null}
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
          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Nome"
            variant="filled"
            name="name"
          />
          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Descrição"
            variant="filled"
            name="description"
          />
          <Button mb={3} colorScheme="blue" onClick={handleCreateNewQuestion}>
            Adicionar perguntas
          </Button>
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
