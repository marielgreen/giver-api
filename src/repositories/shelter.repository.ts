import {DefaultCrudRepository, juggler } from '@loopback/repository';
import { Shelter} from '../models/shelter.model';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';

export class ShelterRepository extends DefaultCrudRepository<
Shelter,
typeof Shelter.prototype.id
> 


{
    constructor(@inject('datasources.db') protected datasource: juggler.DataSource) {
           super(Shelter, datasource);

    }
}
