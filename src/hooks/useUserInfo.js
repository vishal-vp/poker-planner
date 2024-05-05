import { useLocalStorage } from "@uidotdev/usehooks";
import { USER_INFO_LOCALSTORAGE_KEY } from "../app-constants";

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useLocalStorage(
    USER_INFO_LOCALSTORAGE_KEY,
    "{}"
  );

  function setUserInfo(userInfo) {
    setUserInfoStr(JSON.stringify(userInfo));
  }

  return { userInfo, setUserInfo };
}
