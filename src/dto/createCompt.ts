export enum Status {
    open = "open",
    closed = "closed"
}

export interface CreateComptDTO {
    nameOfCompetition:string,
    status:Status
}