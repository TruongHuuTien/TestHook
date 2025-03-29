import store from "../store";
import { userSlice } from "./userSlice";

class User {
  name: string = 'No Name';

  setName(name: string) {
    this.name = name;
    this.update();
  }

  update() {
    store.dispatch(userSlice.actions.update(this.getState()));
  }

  getState() {
    return {
      name: this.name,
    }
  }
}

export const userModel:User =  new User();