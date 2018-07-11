import { UserRepository } from "../repositories/user.repository";
import { Users } from "../models/user";
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    login(email: string): Promise<Array<any>>;
    registerUser(users: Users): Promise<Users>;
    findUsers(): Promise<Users[]>;
    findUsersById(id: number): Promise<Users>;
}
