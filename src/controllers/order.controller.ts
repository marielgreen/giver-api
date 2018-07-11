import { repository, Order } from "@loopback/repository";
import { donationRepository } from "../repositories/donation.repository";
import { order } from "../models/order.model";
import { get, param, HttpErrors } from "@loopback/rest"
import { orderRepository } from "../repositories/order.repository";
import { sign, verify } from 'jsonwebtoken';


export class OrderController {
  constructor(@repository(orderRepository.name) protected orderRepo: orderRepository
  ) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {
    try {
      let payload = verify(jwt, "shh");
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid Token");
    }
  }

  @get("/order")
  async getAllOrders(): Promise<Array<any>> {
    return await this.orderRepo.find();
  }

}



