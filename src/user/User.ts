export class User {
  name: string = 'No Name';

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getState(): IUserState {
    return {
      name: this.getName(),
    }
  }
}