import { orderRepository } from "../repositories/order.repository";
export declare class OrderController {
    protected orderRepo: orderRepository;
    constructor(orderRepo: orderRepository);
    verifyToken(jwt: string): string | object;
    getAllOrders(): Promise<Array<any>>;
}
