// export interface UserInterface {
//   id: number
// }
// export const fake_data: UserInterface[] = []

import Page from '@components/Page'
import { json } from 'stream/consumers'

let id = 2

export const generateId: () => number = () => {
  id += 1
  return id
}

export class User implements UserInterface {
  readonly id: string | number

  first_name: string

  last_name: string

  birthday: string

  gender: 0 | 1

  email: string

  phone: string

  address: string

  username: string

  status: 0 | 1 | 2

  constructor(json: any) {
    const keys = Object.keys(json)
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index]
      this[key] = json[key]
    }
  }

  static fromJson = (json:Record<string, any>) => {
    return new User(json)
  }
}

export const fake_class: User[] = [
  new User({
    id: generateId(),
    firs_name: 'Thang',
    last_name: 'Pham',
    birthday: '14/6/1999',
    gender: 1,
  })
]
