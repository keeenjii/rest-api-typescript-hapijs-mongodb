import {areaPreferences} from './AreaPreferences'
import {Schema, model, Document} from 'mongoose'

export interface IBiomapsPreferences extends Document {
    languageCode: string;
    useSexagesimalCoordinates: string;
    coodinateDecimalPrecision: string;
    showBatteriesSeparately: string;
    unitSystem: string;
    deafultAreaPreferences: typeof areaPreferences;
}

export const biomapsPreferences = new Schema ({
    'languageCode':{
        type: String, //enum on docs
        required: true
    },
    'useSexagesimalCoordinates':{
        type:Boolean,
        required: true,
    },
    'coordinateDecimalPrecision':{
        type:String, //enum
        required:true,
    },
    'showBatteriesSeparately':{
        type:Boolean,
        required:true
    },
    'unitSystem':{
        type:String,
        required: true
    },
    'defaultAreaPreferences':{
        type:areaPreferences,
        required: true
    }
})