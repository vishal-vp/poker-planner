import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export function createRoom(roomID, roomData) {
  set(ref(database, `rooms/${roomID}`), roomData);
}

export function joinRoom(roomID, userInfo) {
  set(ref(database, `rooms/${roomID}/users/${userInfo?.userID}`), userInfo);
}

export function addEstimate(roomID, userID, estimate) {
  set(ref(database, `rooms/${roomID}/estimates/${userID}`), estimate);
}

export function setEstimateVisibility(roomID, visibility) {
  set(ref(database, `rooms/${roomID}/isVisible`), visibility);
}

export function clearEstimates(roomID) {
  set(ref(database, `rooms/${roomID}/estimates`), null);
}

export function registerCallbackForRoomData(roomID, callback) {
  const roomRef = ref(database, `rooms/${roomID}`);
  const callbackWrapper = (snapshot) => callback(snapshot.val());
  const unsubscribe = onValue(roomRef, callbackWrapper);
  return {
    unsubscribe,
  };
}
