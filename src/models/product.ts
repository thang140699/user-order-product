/* eslint-disable new-cap */
import Page from '@components/Page'
import product from '@product'
import { json } from 'stream/consumers'

let pid = 2

export const productId: () => number = () => {
     pid += 1
     return pid
}

export class Product implements productInterface {
     readonly id: number | string

     name: string

     price: number

     brand: string

     weight: string

     status : 0 | 1

     constructor(json: any) {
          const keyss = Object.keys(json)
          for (let index = 0; index < keyss.length; index += 1) {
               const prdt = keyss[index]
               this[prdt] = json[prdt]
          }
     }

     static fromJson = (json: Record<string, any>) => {
          return new Product(json)
     }
}
export const fake_product: Product[] = [
     new Product({
          id: productId,
          name: 'carrot',
          price: 45000,
          brand: 'VN',
          weight: '1kg',
          status: 1,
     })
]
