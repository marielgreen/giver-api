import { repository } from "@loopback/repository";
import { donationRepository } from "../repositories/donation.repository";
import { donation } from "../models/donation.model";
import { get, param, HttpErrors } from "@loopback/rest";
import { sign, verify } from 'jsonwebtoken';


export class DonationController {
  constructor(
    @repository(donationRepository.name) protected donationRepo: donationRepository
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

  @get("/donation")
  async getAllDonations(): Promise<Array<any>> {
    return await this.donationRepo.find();
  }

}
