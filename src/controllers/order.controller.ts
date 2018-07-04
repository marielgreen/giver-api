import { repository } from "@loopback/repository";
import { donationRepository } from "../repositories/donation.repository";
import { order } from "../models/order.model";
import { get, param, HttpErrors } from "@loopback/rest"
import { orderRepository } from "../repositories/order.repository";


export class OrderController {
  constructor(@repository(orderRepository.name) protected orderRepo: orderRepository
  ) { }

  @get("/order")
  async getAllOrders(): Promise<Array<any>> {
    return await this.orderRepo.find();
  }

}


