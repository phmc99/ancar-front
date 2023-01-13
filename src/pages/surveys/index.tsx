import {
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Progress,
  Text,
} from '@chakra-ui/react';
import SurveyItem from '../../components/SurveyItem';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../store';
import { getSurveys } from '../../store/surveys';
import { useEffect, useState } from 'react';
import Router from 'next/router';

const ListAllSurveys = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: AppState) => state.survey);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getSurveys('/surveys?take=9'));
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(getSurveys(`/surveys?take=9&page=${data?.nextPage}`));
  };

  const handlePrevPage = () => {
    dispatch(getSurveys(`/surveys?take=9&page=${data?.prevPage}`));
  };

  const handleCreateNewSurvey = () => {
    Router.push(`/surveys/create`);
  };

  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      direction="column"
      justifyContent="center"
      alignItems={'center'}
    >
      <Heading>Todos Questionarios</Heading>
      <Button
        onClick={handleCreateNewSurvey}
        size={'md'}
        colorScheme="blue"
        variant={'ghost'}
      >
        Criar Questionario
      </Button>

      {loading ? (
        <>
          <Text>
            <b>Aviso:</b> O primeiro carregamento pode demorar até 1 minuto.
          </Text>
          <Progress w={'40%'} size="md" isIndeterminate />
        </>
      ) : (
        <Grid
          p={5}
          w={'90%'}
          templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          gap={6}
          overflowY={['scroll', 'hidden']}
        >
          {data?.data.map(item => (
            <SurveyItem
              key={item.cod}
              id={item.cod || ''}
              description={item.description}
              name={item.name}
            />
          ))}
        </Grid>
      )}
      <Flex alignItems={'center'} gap={3}>
        <IconButton
          aria-label="ChangePage"
          bgColor={'transparent'}
          icon={<ArrowLeftIcon />}
          disabled={data?.prevPage != null ? false : true}
          onClick={handlePrevPage}
        />
        <Heading size={'md'}>{page}</Heading>
        <IconButton
          aria-label="ChangePage"
          bgColor={'transparent'}
          icon={<ArrowRightIcon />}
          disabled={data?.nextPage != null ? false : true}
          onClick={handleNextPage}
        />
      </Flex>
    </Flex>
  );
};

export default ListAllSurveys;
