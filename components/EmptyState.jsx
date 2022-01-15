import React from "react"
import { Heading, Box, Text, Button, VStack } from "@chakra-ui/react"

import AddSiteModal from "./AddSiteModal"

const EmptyState = () => (
  <VStack
    width="100%"
    backgroundColor="white"
    borderRadius={4}
    p={16}
    spacing={8}
  >
    <VStack spacing={8} justify="center" w="full" textAlign="center">
      <Heading size="lg">You haven&apos;t added any sites</Heading>
      <Text>Welcome 👋 Let&apos;s get started. </Text>
      <AddSiteModal>Add your first site</AddSiteModal>
    </VStack>
  </VStack>
)

export default EmptyState
