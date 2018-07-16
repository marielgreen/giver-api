import { Entity } from '@loopback/repository';
export declare class order extends Entity {
    idorder: number;
    date: Date;
    iduser: number;
    idshelter: number;
    amazonid: number;
}
