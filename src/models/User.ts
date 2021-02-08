import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt'
import {biomapsPreferences} from './BiomapsPreferences'

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>;
    biomapsPrefs: typeof biomapsPreferences
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    biomapsPrefs: biomapsPreferences,
    
    //TODO: set required field to true
}, {
    timestamps: true
})

userSchema.pre<IUser>("save", async function (next){

    const user = this;

    if(!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
})

userSchema.methods.comparePassword = async function<IUser>(password: string): Promise<Boolean> {
    return await bcrypt.compare(this.password, password);
}

export default model<IUser>("User", userSchema)