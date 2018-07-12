import { donationRepository } from "../repositories/donation.repository";
export declare class DonationController {
    protected donationRepo: donationRepository;
    constructor(donationRepo: donationRepository);
    verifyToken(jwt: string): string | object;
    getAllDonations(): Promise<Array<any>>;
}
