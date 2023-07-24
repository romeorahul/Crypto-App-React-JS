import React from "react";
import { Box, Text, Input, Button, Grid, GridItem, AspectRatio } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box
      p={8}
      height='100vh'
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={8}>
        <GridItem>
          <Text fontSize="xl" mb={4}>
            Contact Us
          </Text>
          <Input placeholder="Your Name" mb={4} />
          <Input placeholder="Email Address" mb={4} />
          <Input placeholder="Message" mb={4} size="lg" />
          <Button colorScheme="blue" size="lg">
            Send Message
          </Button>
        </GridItem>
        <GridItem>
          <Box h="300px" bg="gray.200" borderRadius="md">
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ContactUs;
