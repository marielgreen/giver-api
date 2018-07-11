import { model, property, Entity } from "@loopback/repository";

@model({
  name: "user"//name of table on MySQL
})
export class Users extends Entity {

  @property({
    type: "number",
    id: true
  })
  iduser: number; // names in blue need to match the column names on MySQL

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  email: string;

  @property({
    type: "string"
  })
  password: string;

  getId() {
    return this.id;
  }
}
