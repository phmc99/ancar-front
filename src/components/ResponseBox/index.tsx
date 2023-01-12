import { Flex, Text, Textarea } from '@chakra-ui/react';

const ResponseBox = () => {
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
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque
          quod libero maiores sequi placeat officia cupiditate tempore sapiente
          odit. Deserunt minima quasi expedita iste beatae, minus illum vel
          vitae?
        </Text>
        <Textarea placeholder="Responda aqui" />
      </Flex>
    </>
  );
};

export default ResponseBox;
