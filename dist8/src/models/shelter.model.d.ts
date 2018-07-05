import { Entity } from '@loopback/repository';
export declare class Shelter extends Entity {
    id?: number;
    name: string;
    address: string;
    description: string;
    amazonid: number;
    getID(): number | undefined;
}
