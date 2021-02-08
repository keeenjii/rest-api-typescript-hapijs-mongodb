import {areaPreferences} from './AreaPreferences'
import {Schema, model, Document} from 'mongoose'

export interface IBiomapsPreferences extends Document {
    languageCode: string;
    useSexagesimalCoordinates: Boolean;
    coodinateDecimalPrecision: string;
    showBatteriesSeparately: Boolean;
    unitSystem: string;
    defaultAreaPreferences: typeof areaPreferences;
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
        required: false //TODO: set true
    }
})

export default model<IBiomapsPreferences>("BiomapsPreferences", biomapsPreferences)