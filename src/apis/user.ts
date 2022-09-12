import { fake_class, User } from '@models/user'
import React from 'react'

const list: () => Promise<BaseResponse<User[]>> = () => {
     return new Promise<BaseResponse<User[]>>(resolve => {
          setTimeout(() => {
               resolve({
                    data: fake_class,
                    page: {
                         current: 1,
                         max: 10,
                         count: fake_class.length
                    }
               })
          }, 1500)
     })
}

export const UserApi = {
     list,
}
