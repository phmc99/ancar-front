import { Box, Text } from '@chakra-ui/react';
import { InputHTMLAttributes } from 'react';

interface SurveyQuestionCreateBoxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
}

const SurveyQuestionCreateBox = ({
  description,
  ...rest
}: SurveyQuestionCreateBoxProps) => {
  return (
    <Box
      cursor={'pointer'}
      borderRadius={5}
      p={2}
      w="95%"
      bgColor="gray.100"
      {...rest}
    >
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {description}
      </Text>
    </Box>
  );
};

export default SurveyQuestionCreateBox;
