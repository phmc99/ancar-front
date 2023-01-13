import { Button, Flex, Heading, Input, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import NewSurveyQuestion from '../../components/NewSurveyQuestion';
import SurveyQuestionCreateBox from '../../components/SurveyQuestionCreateBox';
import UpdateSurveyQuestion from '../../components/UpdateSurveyQuestion';
import api from '../../services';
import { ISurvey } from '../../types';

const CreateSurvey = () => {
  const [newQuestion, setNewQuestion] = useState<boolean>(false);
  const [updateQuestion, setUpdateQuestion] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    // eslint-disable-next-line comma-dangle
    ''
  );
  const toast = useToast();

  const surveyInitialState: ISurvey = {
    name: '',
    description: '',
    questions: [],
  };
  const [surveyCreate, setSurveyCreate] = useState<ISurvey>(surveyInitialState);

  const handleCreateNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };
  const handleUpdateNewQuestion = (question?: string) => {
    setSelectedQuestion(question);
    setUpdateQuestion(!updateQuestion);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    const inputName = e.target.name;
    const copy: any = { ...surveyCreate };

    copy[inputName] = value;

    setSurveyCreate(copy);
  };

  const postQuestion = async () => {
    if (
      surveyCreate.description.trim() === '' ||
      surveyCreate.name.trim() === ''
    ) {
      toast({
        title: 'Adicione um Nome e Descrição',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (surveyCreate.questions.length <= 0) {
      toast({
        title: 'Adicione perguntas',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const response = await api.post('/surveys', surveyCreate);
    Router.push(`/surveys/${response.data.cod}/response`);
    return toast({
      title: `Questionario ${response.data.name} criado!`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleBackToSurveys = () => {
    Router.push(`/surveys`);
  };

  return (
    <>
      <Head>
        <title>Ancar</title>
        <meta name="description" content="Ancar" />
      </Head>
      {newQuestion ? (
        <NewSurveyQuestion
          survey={surveyCreate}
          setSurvey={setSurveyCreate}
          setToggle={handleCreateNewQuestion}
        />
      ) : null}
      {updateQuestion ? (
        <UpdateSurveyQuestion
          survey={surveyCreate}
          setSurvey={setSurveyCreate}
          description={selectedQuestion}
          setToggle={handleUpdateNewQuestion}
        />
      ) : null}
      <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
        <Flex
          h={[320, 420]}
          w={[320, 380]}
          direction="column"
          alignItems="center"
          bgColor="whitesmoke"
          p={[2, 5]}
        >
          <Heading mb={2} size="md">
            Criar Questionario
          </Heading>
          <Button
            onClick={handleBackToSurveys}
            mb={2}
            size={'md'}
            variant="link"
          >
            Voltar
          </Button>

          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Nome"
            variant="filled"
            name="name"
            onChange={handleChange}
          />
          <Input
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Descrição"
            variant="filled"
            name="description"
            onChange={handleChange}
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
            {surveyCreate.questions.length > 0 ? (
              surveyCreate.questions.map((item, index) => (
                <SurveyQuestionCreateBox
                  key={index}
                  description={item.description}
                  onClick={() => handleUpdateNewQuestion(item.description)}
                />
              ))
            ) : (
              <Heading size={'sm'}>Nenhuma pergunta adicionada</Heading>
            )}
          </Flex>
          <Button
            onClick={postQuestion}
            alignSelf={['flex-end', 'center']}
            colorScheme="green"
          >
            Criar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateSurvey;
