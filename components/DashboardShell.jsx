import React from "react"
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"

import { UpDownIcon } from "styles/iconsSVG"

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Stack spacing={4} isInline alignItems="center">
        <UpDownIcon boxSize={8} />
        <Link>Sites</Link>
        <Link>Feedback</Link>
      </Stack>
      <Stack spacing={4} isInline alignItems="center">
        <Link>Account</Link>
        <Avatar size="sm" />
      </Stack>
    </Flex>
    <Flex backgroundColor="gray.100" height="100%" p={8}>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        maxWidth="1000px"
        ml="auto"
        mr="auto"
        w="full"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites /</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading mb={4}>Sites</Heading>
        {children}
      </Flex>
    </Flex>
  </Flex>
)

export default DashboardShell
