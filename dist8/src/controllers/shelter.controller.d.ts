import { ShelterRepository } from "../repositories/shelter.repository";
import { Shelter } from "../models/shelter.model";
export declare class ShelterController {
    private shelterRepo;
    constructor(shelterRepo: ShelterRepository);
    getAllShelter(): Promise<Array<any>>;
    getSpecificShelter(idshelter: string): any;
    createShelter(shelter: Shelter): Promise<Shelter>;
}
