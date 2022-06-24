import {v4} from "uuid"

export class GeneratedId {
    newId(){
        return v4()
    }
}