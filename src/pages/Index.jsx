import React from "react";
import { Box, Text, VStack, Image, Button, Center, Heading, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Hello World!
        </Heading>

        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iZXxlbnwwfHx8fDE3MDkwNDEzMTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Globe Image" />

        <Text fontSize="xl" textAlign="center">
          Welcome to our Hello World website. Explore the wonders of our planet and learn more about our home in the cosmos.
        </Text>

        <Center>
          <Button colorScheme="blue" size="lg">
            Discover More
          </Button>
        </Center>
      </VStack>
    </Container>
  );
};

export default Index;
