import { Entity } from "@loopback/repository";
export declare class Users extends Entity {
    iduser: number;
    name: string;
    email: string;
    password: string;
    getId(): any;
}
