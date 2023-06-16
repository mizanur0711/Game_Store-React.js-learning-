import create from "./htpp-service";

export interface User {
  id: number;
  name: string;
}

export default create("/users");
