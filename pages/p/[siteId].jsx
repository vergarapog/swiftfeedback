import { getAllFeedback, getAllSites } from "lib/firestore-admin"
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useRef, useState, useEffect } from "react"
import { useAuth } from "lib/auth"
import { createFeedback } from "lib/firestore"
import Feedback from "components/Feedback"

export async function getStaticProps(context) {
  const siteId = context.params.siteId
  const { feedback } = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback,
    },
  }
}
export async function getStaticPaths() {
  const { sites } = await getAllSites()

  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}

const SiteFeedback = ({ initialFeedback }) => {
  const auth = useAuth()
  const router = useRouter()
  const inputEl = useRef(null)
  const [allFeedback, setAllFeedback] = useState(initialFeedback)

  const onSubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    }
    setAllFeedback([newFeedback, ...allFeedback])
    inputEl.current.value = ""
    createFeedback(newFeedback)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="full"
      maxWidth="700px"
      m="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input ref={inputEl} id="comment" type="comment" />
          <Button type="submit" mt={2} fontWeight="medium">
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map((feedback) => {
        return <Feedback key={feedback.id} {...feedback} />
      })}
    </Box>
  )
}

export default SiteFeedback
