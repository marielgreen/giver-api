import { DefaultCrudRepository, Order } from "@loopback/repository";
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { order } from '../models/order.model';

export class orderRepository extends DefaultCrudRepository<
  order,
  typeof order.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(order, datasource);
  }

}
