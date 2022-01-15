import { Box, Divider, Heading, Text } from "@chakra-ui/react"
import { parseISO, format } from "date-fns"
import React from "react"

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full" my={4}>
      <Heading size="sm" as="h3" mb={1} color="gray.900" fontWeight="bold">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Text color="gray.800" pb={8}>
        {text}
      </Text>
      <Divider borderColor="gray.200" backgroundColor="gray.200"></Divider>
    </Box>
  )
}

export default Feedback
