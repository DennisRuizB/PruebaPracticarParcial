import { ICompany } from "../models/company";
import { IGeolocalization, GeolocalizationModel } from "../models/geolocalization";

export class GeolocalizationService{
    async postGeolocalitzation(geolocalization: Partial<IGeolocalization>): Promise<IGeolocalization> {
        try{
            const newGeolocalitzation = new GeolocalizationModel(geolocalization);
            return newGeolocalitzation.save();
        }
        catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async getAllGeolocalitzation(): Promise<IGeolocalization[]>{
        try{
            return GeolocalizationModel.find();
        }catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async getGeolocalitzationById(id: string): Promise<IGeolocalization | null>{
        try{
            return GeolocalizationModel.findById(id);
        }
        catch (error: any){
            console.log(error);
            throw error;
        }
    }

    async updateGeolocalitzationById(id: string, updateData: Partial<IGeolocalization>){
        try{
            return await GeolocalizationModel.updateOne({_id: id}, {$set: updateData});
        }
        catch (error: any){
            console.log(error);
            throw error;
        }
    }

    async deleteGeolocalitzationById(id: string): Promise<IGeolocalization | null>{
        try{
            return GeolocalizationModel.findByIdAndDelete(id);
        }
        catch (error: any){
            console.log(error);
            throw error;
        }
    }


}
