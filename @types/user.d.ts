declare global {
  export interface UserInterface {
    readonly id: string | number

    first_name: string

    last_name: string

    birthday: string

    gender: 0 | 1

    email: string

    phone: string

    address: string

    username: string
  }
  interface Page {
     current:number
     max: number
     count?: number
  }
  export interface BaseResponse<T> {
     data: T
     page?: Page
  }
  export interface productInterface {
    readonly id: number | string
    name: string
    price: number
    brand: string
    weight: string
    status : 0 | 1
  }
  export interface orderInterface {
    readonly id: number | string
    name : string

    discount : number

    city: string

    state:string

    phone: number
  }
}
export {}
