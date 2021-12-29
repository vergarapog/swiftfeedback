import React from "react"
import { Heading, Box, Text, Button, VStack } from "@chakra-ui/react"

import DashboardShell from "./DashboardShell"

const EmptyState = () => (
  <DashboardShell>
    <VStack
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={8}
      spacing={8}
    >
      <VStack spacing={3} justify="center" w="full" textAlign="center">
        <Heading size="lg">You haven&apos;t added any sites</Heading>
        <Text>Welcome 👋 Let&apos;s get started. </Text>
      </VStack>
      <Button variant="solid" size="md">
        Add Your First Site
      </Button>
    </VStack>
  </DashboardShell>
)

export default EmptyState
