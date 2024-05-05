import { PATHS, USER_INFO_LOCALSTORAGE_KEY } from "./app-constants";

export function generateRoomURLFromID(roomID) {
  return `${PATHS.ROOM}/${roomID}`;
}

export function getUserInfo() {
  const userInfo = JSON.parse(
    localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY) || "{}"
  ) || { username: undefined, userID: undefined };
  return userInfo;
}
