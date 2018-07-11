import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from 'loopback-datasource-juggler';
import { donation } from '../models/donation.model';
export declare class donationRepository extends DefaultCrudRepository<donation, typeof donation.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
