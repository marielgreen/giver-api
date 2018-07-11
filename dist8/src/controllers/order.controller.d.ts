import { orderRepository } from "../repositories/order.repository";
export declare class OrderController {
    protected orderRepo: orderRepository;
    constructor(orderRepo: orderRepository);
    getAllOrders(): Promise<Array<any>>;
}
