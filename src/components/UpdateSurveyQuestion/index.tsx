import { Button, CloseButton, Flex, Textarea } from '@chakra-ui/react';
import { ISurvey } from '../../types';
import { useState } from 'react';

interface UpdateSurveyQuestionProps {
  survey: ISurvey;
  description?: string;
  setSurvey: (survey: ISurvey) => void;
  setToggle: () => void;
}

const UpdateSurveyQuestion = ({
  survey,
  setToggle,
  setSurvey,
  description,
}: UpdateSurveyQuestionProps) => {
  const [newQuestion, setNewQuestion] = useState<string>(description || '');
  const handleRemoveQuestion = () => {
    if (!description) {
      setToggle();
      return;
    }
    const question = survey.questions.findIndex(
      // eslint-disable-next-line comma-dangle
      item => item.description.toLowerCase() === description.toLowerCase()
    );

    survey.questions.splice(question, 1);
    setSurvey(survey);
    setToggle();
  };

  const handleUpdateQuestion = () => {
    if (!description) {
      setToggle();
      return;
    }
    const questionIndex = survey.questions.findIndex(
      // eslint-disable-next-line comma-dangle
      item => item.description.toLowerCase() === description.toLowerCase()
    );

    survey.questions.splice(questionIndex, 1, { description: newQuestion });
    setSurvey(survey);
    setToggle();
  };

  return (
    <>
      <Flex
        height="100vh"
        width="100%"
        zIndex={1}
        position="absolute"
        backgroundColor="#0c0c0cf0"
        alignItems="center"
      >
        <Flex
          direction={'column'}
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          w={[380, 420]}
          m="10px auto"
          backgroundColor="#f1f1f1"
          height="max-content"
        >
          <CloseButton onClick={setToggle} mb={2} alignSelf={'flex-end'} />
          <Textarea
            bgColor="whiteAlpha.600"
            mb={3}
            w="95%"
            placeholder="Atualizar descrição da pergunta"
            variant="filled"
            value={newQuestion}
            onChange={e => setNewQuestion(e.target.value)}
          />
          <Flex gap={2} justifyContent={'center'} w={'100%'}>
            <Button
              colorScheme="red"
              variant={'outline'}
              onClick={handleRemoveQuestion}
            >
              Remover
            </Button>
            <Button colorScheme="orange" onClick={handleUpdateQuestion}>
              Atualizar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default UpdateSurveyQuestion;
