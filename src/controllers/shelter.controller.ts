// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { ShelterRepository } from "../repositories/shelter.repository";
import { Shelter } from "../models/shelter.model";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { sign, verify } from 'jsonwebtoken';

export class ShelterController {
  constructor(
    @repository(ShelterRepository.name) private shelterRepo: ShelterRepository
  ) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {
    try {
      let payload = verify(jwt, "shh");
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid Token");
    }
  }


  @get('/shelter')
  async getAllShelter(): Promise<Array<Shelter>> {
    return await this.shelterRepo.find();
  }

  @get('/shelter/{idshelter}')
  async getSpecificShelter(
    @param.path.string("idshelter") idshelter: string
  ): Promise<any> {
    if (idshelter == "1") {
      return "123";
    }
    if (idshelter == "B") {
      return "BCD";
    if (idshelter =="2") {
      return "234";
    }
    throw new HttpErrors.NotFound("Sorry, id cannot be found");
  }


  @post('/shelters')
  async createShelter(
    @requestBody() shelter: Shelter
  ): Promise<Shelter> {

    let createShelter = await this.shelterRepo.create(shelter);
    return createShelter;
  }
}
