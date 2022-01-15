import db from "lib/firebase-admin"
import { getAllSites } from "lib/firestore-admin"

export default async (req, res) => {
  // const snapshot = await db.collection("sites").get()
  // const sites = []

  // snapshot.forEach((doc) => {
  //   sites.push({ id: doc.id, ...doc.data() })
  // })

  const { sites, error } = await getAllSites()
  if (error) {
    res.status(500).json({ error })
  }

  res.status(200).json({ sites })
}
