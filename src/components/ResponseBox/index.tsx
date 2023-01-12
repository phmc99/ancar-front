import { Flex, Text, Textarea } from '@chakra-ui/react';
import { ISurveyQuestion } from '../../types';

const ResponseBox = ({ description }: ISurveyQuestion) => {
  return (
    <>
      <Flex
        alignItems={'center'}
        direction="column"
        width={'100%'}
        bgColor="whiteAlpha.500"
        textAlign={'left'}
        p={2}
        gap={2}
        borderRadius={5}
      >
        <Text>{description}</Text>
        <Textarea placeholder="Responda aqui" />
      </Flex>
    </>
  );
};

export default ResponseBox;
