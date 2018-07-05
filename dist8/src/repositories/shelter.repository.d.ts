import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Shelter } from '../models/shelter.model';
export declare class ShelterRepository extends DefaultCrudRepository<Shelter, typeof Shelter.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
