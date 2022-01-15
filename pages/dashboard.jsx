import { auth } from "firebase"
import Head from "next/head"
import Image from "next/image"
import { useAuth } from "../lib/auth"
import styles from "../styles/Home.module.css"

import { UpDownIcon } from "styles/iconsSVG"

import {
  Button,
  Code,
  Heading,
  VStack,
  HStack,
  Icon,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react"

import DashboardShell from "components/DashboardShell"
import FreePlanEmptyState from "components/FreePlanEmptyState"
import EmptyState from "components/EmptyState"
import SiteTableSkeleton from "components/SiteTableSkeleton"
import useSWR from "swr"
import fetcher from "utils/fetcher"
import SiteTable from "components/SiteTable"

export default function Dashboard() {
  const auth = useAuth()
  const { data, error } = useSWR("/api/sites", fetcher)

  console.log(data)

  if (!data)
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )

  // if (!auth.user) {
  //   return (
  //     <DashboardShell>
  //       <SiteTableSkeleton />
  //     </DashboardShell>
  //   )
  // }
  return (
    <>
      <DashboardShell>
        {data.sites.length == 0 ? (
          <EmptyState />
        ) : (
          <SiteTable sites={data.sites} />
        )}
      </DashboardShell>
    </>
  )
}
