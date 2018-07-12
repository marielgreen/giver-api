import { UserRepository } from "../repositories/user.repository";
import { Users } from "../models/user.model";
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    verifyToken(jwt: string): string | object;
    login(user: Users): Promise<{
        token: string;
    }>;
    registerUser(users: Users): Promise<Users>;
    findUsers(): Promise<Users[]>;
    findUsersById(id: number): Promise<Users>;
    updatePassword(email: string, bodyData: any): Promise<void>;
}
