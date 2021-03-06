import { DefaultCrudRepository, juggler } from "@loopback/repository";
import { Users } from "../models/user";
export declare class UserRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
