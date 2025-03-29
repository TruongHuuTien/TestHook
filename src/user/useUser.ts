
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserModel, userModel } from "./userModel";
import { useRef } from "react";



export const useUser = () => {
  const userName = useSelector((state: RootState) => state.user.name);

  return {
    userName: userName,
    setUserName: (name: string) => userModel.setName(name),
  }
}

export const useUser2 = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const userInstanceRef = useRef<UserModel | null>(null);

  const initUserInstance = () => {
    if (!userInstanceRef.current) {
      userInstanceRef.current = new UserModel('My Name');
      userInstanceRef.current.update();
    }
  }

  const setUserName = (name: string) => {
    if (userInstanceRef.current) {
      userInstanceRef.current.setName(name);
    } else {
      userInstanceRef.current = new UserModel(name);
      userInstanceRef.current.setName(name);
    }
  }

  return {
    initUserInstance,
    userName: userName,
    setUserName: (name: string) => setUserName(name),
  }
}