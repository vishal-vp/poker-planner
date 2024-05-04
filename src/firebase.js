import { initializeApp } from "firebase/app";
import { getDatabase, off, onValue, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://poker-planner-cb864-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export function createRoom(roomID) {
  set(ref(database, `rooms/${roomID}`), { a: 1, b: 2 });
}

export function registerCallbackForRoomData(roomID, callback) {
  const roomRef = ref(database, `rooms/${roomID}`);
  const callbackWrapper = (snapshot) => callback(snapshot.val());
  const unsubscribe = onValue(roomRef, callbackWrapper);
  return {
    unsubscribe,
  };
}
