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

export default function Dashboard() {
  const auth = useAuth()

  if (!auth.user) {
    return "Loading..."
  }
  return (
    <>
      <EmptyState />
    </>
  )
}
