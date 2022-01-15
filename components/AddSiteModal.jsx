import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  useToast,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { createSite } from "lib/firestore"
import { useAuth } from "lib/auth"
import useSWR, { mutate } from "swr"
import fetcher from "utils/fetcher"

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const auth = useAuth()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { data, error } = useSWR("/api/sites", fetcher)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isSafeToReset, setIsSafeToReset] = React.useState(false) // for resetting chakra form values after submit

  React.useEffect(() => {
    // for resetting chakra form values after submit
    if (!isSafeToReset) return

    reset() // asynchronously reset your form values
  }, [isSafeToReset])

  const handleCreateSite = ({ siteName, linkName }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      siteName,
      linkName,
    }
    createSite(newSite)
    toast({
      title: "Success!",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    // mutate("/api/sites", {
    //   sites: [...data.sites, newSite],
    // })
    mutate(
      "/api/sites",
      async (data) => {
        return { sites: [...data.sites, newSite] }
      },
      false // cancels revalidation on server, just proceeds to edit cache
    )
    setIsSafeToReset(true)
    console.log(isSafeToReset)
    onClose()
  }

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800", transform: "scale(0.95)" }}
      >
        {children}
      </Button>

      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(handleCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel ref={initialRef}>Name</FormLabel>
              <Input
                placeholder="My Site"
                {...register("siteName", { required: "Site name required" })}
              />
              {errors.siteName && (
                <Text color="red" px={1} mt={1} fontSize="sm">
                  {errors.siteName.message}
                </Text>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="http://website.com"
                {...register("linkName", { required: "Link URL required" })}
              />
              {errors.linkName && (
                <Text color="red" px={1} mt={1} fontSize="sm">
                  {errors.linkName.message}
                </Text>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button colorScheme="cyan" fontWeight="medium" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal
