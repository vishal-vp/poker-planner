import { PATHS } from "./app-constants";

export function generateRoomURLFromID(roomID) {
  return `${PATHS.ROOM}/${roomID}`;
}
