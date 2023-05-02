import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";

import useIdentify from "../hooks/useIdentify";
import SendNotificationForm from "../components/SendNotificationForm";

export default function Home() {
  const { userId, isLoading } = useIdentify();

  if (isLoading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="100vh"
      >
        <Spinner />
      </Flex>
    );
  }

  return (
    <Box maxW="520px" mx="auto" py={12}>
      <Flex mb={8}>
        <Box>
          <Heading size="md" mb={2}>
            Notify app
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Heading size="sm" mb={3}>
          Send an in-app notification
        </Heading>

        <Flex ml="auto" alignItems="center">
          {/*
              TODO: add notification feed here
            */}
        </Flex>
      </Flex>

      <SendNotificationForm userId={userId} />
    </Box>
  );
}
