import { fake_product, Product } from '@models/product'
import product from '@product'
import React from 'react'

const Listproduct: () => Promise<BaseResponse<Product[]>> = () => {
     return new Promise<BaseResponse<Product[]>>(resolve => {
          setTimeout(() => {
               resolve({
                    data: [...fake_product],
                    page: {
                         current: 11,
                         max: 20,
                         count: fake_product.length
                    }
               })
          }, 1500)
     })
}
const createProduct: (p:{
     input: Pick<productInterface, 'name'|'brand'|'price'| 'weight' >
}) => Promise<BaseResponse<Product>> = ({ input }) => {
     return new Promise<BaseResponse<Product>>(resolve => {
          setTimeout(() => {
               const newProduct = Product.fromJson(input)
               fake_product.push(newProduct)
               resolve({ data: newProduct })
          }, 1000)
})
}
export const ProductApi = {
     Listproduct,
     createProduct,
}
