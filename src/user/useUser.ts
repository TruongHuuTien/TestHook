import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { User } from "./User";


export const useUser = () => {
  const user = useSelector((state: RootState) => state.user);
  const userInstanceRef = useRef<User | null>(null);
  const dispatch = useDispatch();
  
  const initUserInstance = () => {
    if (!userInstanceRef.current) {
      userInstanceRef.current = new User();
      update();
    }
  }

  const setUserName = (name: string) => {
    if (!userInstanceRef.current) {
      userInstanceRef.current = new User();
    }
    
    userInstanceRef.current.setName(name);
    update();
  }

  const update = () => {
    dispatch(userSlice.actions.update(userInstanceRef.current?.getState()));
  }

  return {
    initUserInstance,
    userName: user.name,
    setUserName: (name: string) => setUserName(name),
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  } as IUserState,
  reducers: {
    update: (state, action) => action.payload
  },
})