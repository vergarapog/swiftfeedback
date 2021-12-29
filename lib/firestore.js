import firebase from "./firebase"
import "firebase/firestore"

const firestore = firebase.firestore()

export function createUser(uid, data) {
  return firestore
    .collection("users") // like a table from sql
    .doc(uid) // like a identifier or primary key
    .set({ uid, ...data }, { merge: true }) //merge: true means that this entry will be always unique
}
