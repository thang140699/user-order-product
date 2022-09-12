import { fake_order, Order } from '@models/order'
import React from 'react'

const list: () => Promise<BaseResponse<Order[]>> = () => {
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

export const OrderApi = {
     list,
}
