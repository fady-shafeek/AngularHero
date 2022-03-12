import { IGeo } from "./igeo"

export interface IAddress {
    street:string
    suite:string
    city:string
    zipcode:number
    geo:IGeo
}
