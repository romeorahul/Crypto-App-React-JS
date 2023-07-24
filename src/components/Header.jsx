import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"center"}
    >
      <Button variant={"unstyled"} color={"white"} marginRight={"5"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"5"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
      {/* <Button variant={"unstyled"} color={"white"}>
        <Link to={"/coin/:id"}>About</Link>
      </Button> */}
      {/* <Button variant={"unstyled"} color={"white"} marginRight={"5"}>
        <Link to={"about"}>About</Link>
      </Button> */}
      <Button variant={"unstyled"} color={"white"} marginRight={"5"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"5"}>
        <Link to={"/contact"}>Contact</Link>
      </Button>
    </HStack>
  );
};

export default Header;
