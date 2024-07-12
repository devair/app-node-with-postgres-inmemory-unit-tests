import { EntitySchema } from "typeorm";
import { User } from "./User";

export const UserEntity = new EntitySchema<User>({
    name: "users",
    columns: {    
        id: {
            type: Number,
            primary: true,
            generated: true
        },    
        name: {
            type: 'varchar',
            unique: true
        },
        email: {
            type: 'varchar',
        }
    },    
})