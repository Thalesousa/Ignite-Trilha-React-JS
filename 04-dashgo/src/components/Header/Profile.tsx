import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Thales José Sousa Bezerra</Text>
          <Text color="gray.300" fontSize="small">
            thalesousa@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Thales Sousa" src="https://github.com/thalesousa.png" />
    </Flex>
  );
}