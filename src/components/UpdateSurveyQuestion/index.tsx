import { Button, CloseButton, Flex, Textarea } from '@chakra-ui/react';

interface UpdateSurveyQuestionProps {
  setToggle: () => void;
}

const UpdateSurveyQuestion = ({ setToggle }: UpdateSurveyQuestionProps) => {
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
            name="value"
          />
          <Button colorScheme="green" alignSelf={'center'} onClick={setToggle}>
            Atualizar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default UpdateSurveyQuestion;
