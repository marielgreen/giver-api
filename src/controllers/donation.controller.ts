import { repository } from "@loopback/repository";
import { donationRepository } from "../repositories/donation.repository";
import { donation } from "../models/donation.model";
import { get, param, HttpErrors } from "@loopback/rest"


export class DonationController {
  constructor(
    @repository(donationRepository.name) protected donationRepo: donationRepository
  ) { }

  @get("/donation")
  async getAllDonations(): Promise<Array<any>> {
    return await this.donationRepo.find();
  }

}
