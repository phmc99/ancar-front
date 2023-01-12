import { Button, Flex, GridItem, Heading, Text } from '@chakra-ui/react';

interface SurveyItemProps {
  id: string;
  name: string;
  description: string;
}

const SurveyItem = ({ id, name, description }: SurveyItemProps) => {
  return (
    <GridItem>
      <Flex
        p={2}
        borderRadius={5}
        bgColor={'lightblue'}
        direction={'column'}
        alignItems={'center'}
        maxWidth={[280, 380]}
      >
        <Heading size={'sm'}>
          {name}#{id}
        </Heading>
        <Text
          maxWidth="80%"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {description}
        </Text>
        <Button colorScheme={'blue'}>Responder</Button>
      </Flex>
    </GridItem>
  );
};

export default SurveyItem;
