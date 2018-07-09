import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from 'loopback-datasource-juggler';
import { order } from '../models/order.model';
export declare class orderRepository extends DefaultCrudRepository<order, typeof order.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
