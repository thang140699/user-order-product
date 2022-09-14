import { fake_order, Order } from '@models/order'
import React from 'react'

const listorder: () => Promise<BaseResponse<Order[]>> = () => {
     return new Promise<BaseResponse<Order[]>>(resolve => {
          setTimeout(() => {
               resolve({
                    data: fake_order,
                    page: {
                         current: 1,
                         max: 100,
                         count: fake_order.length
                    }
               })
          }, 2000)
     })
}
const createOder: (p:{
     input: Pick<OrderInterface, 'userName'|'city'|'phone'|'discount'|'state' >
}) => Promise<BaseResponse<Order>> = ({ input }) => {
     return new Promise<BaseResponse<Order>>(resolve => {
          setTimeout(() => {
               const newOrder = Order.fromJson(input)
               fake_order.push(newOrder)
               resolve({ data: newOrder })
          }, 100)
})
}
export const OrderApi = {
     listorder,
     createOder,
}
