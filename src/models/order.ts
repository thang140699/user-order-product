import Page from '@components/Page'

import { json } from 'stream/consumers'

let oid = 2
export const orderId: () => number = () => {
     oid += 1
     return oid
}

export class Order implements orderInterface {
     readonly id: number | string

     userName : string

     discount : number

     city: string

     state:string

     phone: number

     status: 0| 1 // || chưa đặt

     constructor(json: any) {
          const keys = Object.keys(json)
          for (let index = 0; index < keys.length; index += 1) {
               const odr = keys[index]
               this[odr] = json[odr]
     }
}

     static fromJson = (json:Record<string, any>) => {
          return new Order(json)
     }
}
export const fake_order: Order[] = [
     new Order({
          id: orderId,
          name: 'thang',
          discount: 5,
          city: 'Hanoi',
          state: 'phamvandong',
          phone: 79630926,
          status: 1,

     })
]
