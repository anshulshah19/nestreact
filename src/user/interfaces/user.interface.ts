import { Document } from 'mongoose';

export interface user extends Document {
    readonly email: string;
    readonly userName: string;
    readonly password: string;
    readonly date_created: string
}