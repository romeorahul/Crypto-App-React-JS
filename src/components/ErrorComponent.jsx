import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ msg }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={'4'}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
      my={'20px'}
      justifyContent={'center'}
    >
      <AlertIcon></AlertIcon>
      {msg}
    </Alert>
  );
};

export default ErrorComponent;
