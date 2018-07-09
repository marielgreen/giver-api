import { UserRepository } from "../repositories/user";
import { Users } from "../models/user";
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findUsers(): Promise<Users[]>;
    findUsersById(id: number): Promise<Users>;
}
