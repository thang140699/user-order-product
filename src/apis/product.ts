import { fake_product, Product } from '@models/product'
import product from '@product'
import React from 'react'

const Listproduct: () => Promise<BaseResponse<Product[]>> = () => {
     return new Promise<BaseResponse<Product[]>>(resolve => {
          setTimeout(() => {
               resolve({
                    data: fake_product,
                    page: {
                         current: 11,
                         max: 20,
                         count: fake_product.length
                    }
               })
          }, 1500)
     })
}

export const ProductApi = {
     Listproduct
}
