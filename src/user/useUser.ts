
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { userModel } from "./userModel";



export const useUser = () => {
  const userName = useSelector((state: RootState) => state.user.name);

  return {
    userName: userName,
    setUserName: (name: string) => userModel.setName(name),
  }
}

