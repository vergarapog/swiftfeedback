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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"
import { useAuth } from "../lib/auth"

import { MoonIcon } from "@chakra-ui/icons"

import { UpDownIcon } from "styles/iconsSVG"

import { mode } from "@chakra-ui/theme-tools"
import AddSiteModal from "./AddSiteModal"

const DashboardShell = ({ children }) => {
  const auth = useAuth()
  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue("gray.100", "gray.800")

  return (
    <Flex flexDirection="column" height="100vh">
      <Flex justifyContent="space-between" alignItems="center" py={5} px={9}>
        <Stack spacing={4} isInline alignItems="center">
          <UpDownIcon boxSize={8} />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Button onClick={toggleColorMode}>
            <MoonIcon />
          </Button>
          {auth.user && (
            <Link mt={4} onClick={(e) => auth.signout()}>
              Log Out
            </Link>
          )}
          <Avatar size="sm" src={auth?.user?.img} />
        </Stack>
      </Flex>
      <Flex backgroundColor={bg} height="100%" p={8}>
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
              <BreadcrumbLink color="gray.700">Sites /</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex flexDirection="row" justify="space-between" w="full" px={0.5}>
            <Heading mb={4}>Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
