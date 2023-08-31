export class User {
  name: string;
  id: number;
  email = '';
  jwt = '';
  isLogin = false;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
