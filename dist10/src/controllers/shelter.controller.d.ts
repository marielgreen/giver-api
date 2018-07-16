import { ShelterRepository } from "../repositories/shelter.repository";
import { Shelter } from "../models/shelter.model";
export declare class ShelterController {
    private shelterRepo;
    constructor(shelterRepo: ShelterRepository);
    verifyToken(jwt: string): string | object;
    getAllShelter(): Promise<Array<Shelter>>;
    getSpecificShelter(idshelter: string): Promise<any>;
}
