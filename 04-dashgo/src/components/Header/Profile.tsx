import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right" >
        <Text>Thales José Sousa Bezerra</Text>
        <Text color="gray.300" fontSize="small">
          thalesousa@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Thales Sousa" src="https://github.com/thalesousa.png" />
    </Flex>
  );
}