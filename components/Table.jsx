import React from "react"
import { Box, Text } from "@chakra-ui/react"

export const Th = (props) => {
  return (
    <Text
      as="th"
      textTransform="uppercase"
      fontSize="xs"
      color="gray.500"
      fontWeight="medium"
      p={4}
      {...props}
    ></Text>
  )
}

export const Td = (props) => {
  return (
    <Box
      as="td"
      color="gray.900"
      p={4}
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      {...props}
    ></Box>
  )
}

export const Tr = (props) => {
  return (
    <Box
      as="tr"
      backgroundColor="gray.50"
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      {...props}
    ></Box>
  )
}

export const Table = (props) => {
  return (
    <Box
      as="table"
      color="gray.900"
      textAlign="left"
      backgroundColor="white"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
      {...props}
    ></Box>
  )
}
