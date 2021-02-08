import {Request, ResponseObject, ResponseToolkit} from '@hapi/hapi'
import AreaPreferences from '../models/AreaPreferences'
import BiomapsPreferences from '../models/BiomapsPreferences'
import User from '../models/User'


export const updateAreaPrefs = async (request: Request, h:ResponseToolkit): Promise<ResponseObject> => {
    try{
        const user = await User.findById(request.params.id)
        const updatedArea = new AreaPreferences(request.payload);
        const updatedPrefs = new BiomapsPreferences(user.biomapsPrefs);
        updatedPrefs.defaultAreaPreferences = <any>updatedArea
        user.biomapsPrefs = <any>updatedPrefs
        console.log(updatedPrefs)
        const updatedUser = await User.findByIdAndUpdate(request.params.id, <any>user, {new:true})
        
        if(updatedUser){
            return h.response(updatedUser);
        }
        else{
            return h.response().code(404)
        }
    }catch(e){
        return h.response(e).code(500)
    }
} 

export const getArea = async (request: Request, h: ResponseToolkit):Promise<ResponseObject> => {
    try{
        const user = await User.findById(request.params.id)
        if(user){
            return h.response(user.biomapsPrefs.defaultAreaPreferences)
        } else {
            return h.response().code(404)
        }
    }catch(e){
        return h.response(e).code(500)
    }
}