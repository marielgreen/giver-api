import { DefaultCrudRepository } from "@loopback/repository";
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { donation } from '../models/donation.model';

export class donationRepository extends DefaultCrudRepository<
  donation,
  typeof donation.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(donation, datasource);
  }

}




