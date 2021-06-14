import { Url } from "node:url";

export enum BillStatus {
    INTRODUCED,
    ENGROSSED,
    ENROLLED,
    PASSED,
    VETOED
}

// for index
export interface IBillBasics {
    numPro: number
    numAnti: number
    bestStates: string[]
    worstStates: string[]
}

// for [state] pages
export interface IBillDetails {
    id: number
    status: number
    title: string
    description: string
    url: string
    date: string
    state: string
    party: string
}
