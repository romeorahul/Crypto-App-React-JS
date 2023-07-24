import {
  Box,
  Center,
  HStack,
  Image,
  Stack,
  VStack,
  Flex,
  Text,
  Button,
  Heading,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"50vh"}>
        <Image
          w={"full"}
          h={"full"}
          objectFit={"cover"}
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </Box>

      {/* about section begins  */}
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={["column", "row"]}
        alignItems="center"
        py={8}
        height={["70vh", "80vh"]}
      >
        <Flex
          align="center"
          justify="space-between"
          flexDirection={["column", "row"]}
          maxWidth={"80%"}
          px={4}
          py={8}
          bg="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Box flex={"1"} paddingRight={["0px", "100px"]}>
            <Heading size="lg" align>
              About Us
            </Heading>
            <Text mt={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              justo et odio laoreet ullamcorper. Vivamus aliquet mauris ut
              sapien varius, ac rutrum quam dignissim. Nunc venenatis tempor
              turpis, vel pharetra arcu dignissim at.
            </Text>
            <Button mt={4} colorScheme="blue">
              Learn More
            </Button>
          </Box>
          <Box p={"5"}>
            <Image
              src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="About Us"
              w={300}
              h={300}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
