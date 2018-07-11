import { donationRepository } from "../repositories/donation.repository";
export declare class DonationController {
    protected donationRepo: donationRepository;
    constructor(donationRepo: donationRepository);
    getAllDonations(): Promise<Array<any>>;
}
