import React from "react"

import { Box, Link } from "@chakra-ui/react"
import { Table, Tr, Th, Td } from "./Table"
import { format, parseISO } from "date-fns"
import AddSiteModal from "./AddSiteModal"

const SiteTable = ({ sites }) => {
  return (
    <>
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => {
            return (
              <Box as="tr" key={site.url}>
                <Td fontWeight="medium">{site.siteName}</Td>
                <Td>{site.linkName}</Td>
                <Td>
                  <Link>View Feedback</Link>
                </Td>
                <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
              </Box>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default SiteTable
