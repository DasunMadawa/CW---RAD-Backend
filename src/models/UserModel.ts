import { Schema, model, Document } from 'mongoose';

export interface ModelUser extends Document{
    firstName: string;
    lastName: string;
    profilePic: string;
    username: string;
    password: string;
    role: 'USER';
}

const userSchema = new Schema<ModelUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    profilePic: { type: String, required: true },
    role: { type: String, required: true, default: 'USER' } ,
    password: { type: String, required: true },
});

export default model<ModelUser>('User', userSchema);
