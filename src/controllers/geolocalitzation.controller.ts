import { Request, Response } from "express";
import { IGeolocalization } from "../models/geolocalization";
import { GeolocalizationService } from "../services/geolocalitzation.service";
import { GeolocalizationModel } from "../models/geolocalization";
import { body } from "express-validator";

const geolocalitzationService = new GeolocalizationService();

export async function postGeolocalitzation(req: Request, res: Response): Promise<void> {
    try{
        const geolocalitzation = req.body as IGeolocalization;
        const newGeolocalitzation = await geolocalitzationService.postGeolocalitzation(geolocalitzation);
        res.status(201).json(newGeolocalitzation);
    }catch(error: any){
        res.status(500).json(error);
    }
}

export async function getAllGeolocalitzation(req: Request, res: Response){
    try{
        const geolocalitzations = await geolocalitzationService.getAllGeolocalitzation();
        res.status(201).json(geolocalitzations);
    }catch(error:any){
        res.status(500).json(error);
    }
}

export async function getGeolocalitzationById(req: Request, res: Response) {
    try{
        const geolocalitzation = await geolocalitzationService.getGeolocalitzationById(req.params.id);
        res.status(201).json(geolocalitzation);
    }catch(error: any ){
        res.status(500).json(error);
    }
}

export async function updateGeolocalitzationById(req: Request, res: Response) {
    try{
        const updatedGeolocalization = await geolocalitzationService.updateGeolocalitzationById(req.params.id,req.body);
        res.status(201).json(updatedGeolocalization);
    }catch(error: any){
        res.status(500).json(error);
    }
}

export async function deleteGeolocalitzationById(req: Request, res: Response) {
    try{
        const deleteGeolocalitzation = await geolocalitzationService.deleteGeolocalitzationById(req.params.id);
        res.status(201).json(deleteGeolocalitzation);
    }catch(error:any){
        res.status(500).json(error);
    }
}