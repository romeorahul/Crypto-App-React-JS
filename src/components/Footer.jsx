import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"35"}
      px={"18"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} justifyContent={'center'}>
        <Text alignItems={'center'} fontWeight={'semibold'} fontSize={'1xl'}>Made By: RAHUL BAGHEL</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
