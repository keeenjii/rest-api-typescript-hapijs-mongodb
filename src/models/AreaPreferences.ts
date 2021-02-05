import { Schema, model, Document } from "mongoose";

export interface IAreaPreferences extends Document{
    flightSpeedInKmPerHour: number;
    trackWidthInMeters: number;
    areaPaddingInMeters: number;
    releaseRate: number;
    flightHeightInMeters: number;
    mustConsiderRelief: number;
}

export const areaPreferences = new Schema({
    'flightSpeedInKmPerHour' : {
        type:Number,
        required: true
    },
    'trackWidthInMeters' : {
        type:Number,
        required:true
    },
    'areaPaddingInMeters' : {
        type:Number,
        required:true
    },
    'releaseRate' : {
        type:Number,
        required: true
    },
    'flightHeightInMeters' : {
        type: Number,
        required: true
    },
    'mustConsiderRelief' : {
        type: Number,
        required: true
    }
})

export default model<IAreaPreferences>("AreaPreferences", areaPreferences)