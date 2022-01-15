import firebase from "./firebase-admin"
import "firebase/firestore"

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firebase
      .collection("feedback")
      .where("siteId", "==", siteId)
      .orderBy("createdAt", "desc")
      .get()

    const feedback = []

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() })
    })
    return { feedback }
  } catch (error) {
    return { error }
  }
}

export async function getAllSites(siteId) {
  try {
    const snapshot = await firebase.collection("sites").get()
    const sites = []

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() })
    })

    return { sites }
  } catch (error) {
    return { error }
  }
}
