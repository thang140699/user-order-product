import { fake_class, User } from '@models/user'
import React from 'react'

const list: () => Promise<BaseResponse<User[]>> = () => {
     return new Promise<BaseResponse<User[]>>(resolve => {
          setTimeout(() => {
               resolve({
                    data: [...fake_class],
                    page: {
                         current: 1,
                         max: 10,
                         count: fake_class.length
                    }
               })
          }, 1500)
     })
}

const create: (p: {
     input: Pick<UserInterface, 'first_name' | 'last_name' | 'gender' | 'birthday'| 'email' |'phone'| 'address' >
   }) => Promise<BaseResponse<User>> = ({ input }) => {
     return new Promise<BaseResponse<User>>(resolve => {
       setTimeout(() => {
         const newUser = User.fromJson(input)
         fake_class.push(newUser)
         resolve({ data: newUser })
       }, 1000)
     })
   }
   export const UserApi = {
     list,
     create,
   }
