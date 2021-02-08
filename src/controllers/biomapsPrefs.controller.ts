import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi'
import BiomapsPreferences from '../models/BiomapsPreferences'
import User from '../models/User'

export const updatePrefs = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try{
        const biomapsPreferences = new BiomapsPreferences(request.payload);
       const userUpdated = await User.findByIdAndUpdate(
           request.params.id,
           <any>{ $set: {'biomapsPrefs': biomapsPreferences}}, 
           {new:true}
        ); 
        if(userUpdated){
            return h.response(userUpdated);
        } 
        else{
           return h.response().code(404)
        }
    }catch(error){
        return h.response(error).code(500);
    }
}

export const getPrefs = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> => {
    try{
        const user = await User.findById(request.params.id)
        if(user){
            return h.response(user.biomapsPrefs)
        }else{
            return h.response().code(404)
        }
    }catch(e){
        return h.response(e).code(500)
    }
}