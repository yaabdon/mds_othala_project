import { v4 as uuid } from "uuid"
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("Users")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    password: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}