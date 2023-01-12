import { Flex, Grid, Heading, IconButton } from '@chakra-ui/react';
import SurveyItem from '../../components/SurveyItem';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const ListAllSurveys = () => {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      direction="column"
      justifyContent="center"
      alignItems={'center'}
    >
      <Heading>Todos Questionarios</Heading>
      <Grid
        p={5}
        w={'90%'}
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
        overflowY={['scroll', 'hidden']}
      >
        <SurveyItem
          name="Survey"
          id="1"
          description="TESTESTETEASIJDASIUDASDHAUSDHAUSIDHASUDHUGETNJIJNFSIDJNDUIN"
        />
        <SurveyItem
          name="Survey"
          id="1"
          description="TESTESTETEASIJDASIUDASDHAUSDHAUSIDHASUDHUGETNJIJNFSIDJNDUIN"
        />
        <SurveyItem
          name="Survey"
          id="1"
          description="TESTESTETEASIJDASIUDASDHAUSDHAUSIDHASUDHUGETNJIJNFSIDJNDUIN"
        />
      </Grid>
      <Flex alignItems={'center'} gap={3}>
        <IconButton
          aria-label="ChangePage"
          bgColor={'transparent'}
          icon={<ArrowLeftIcon />}
        />
        <Heading size={'md'}>1</Heading>
        <IconButton
          aria-label="ChangePage"
          bgColor={'transparent'}
          icon={<ArrowRightIcon />}
        />
      </Flex>
    </Flex>
  );
};

export default ListAllSurveys;
