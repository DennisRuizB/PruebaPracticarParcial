import { Request, Response } from "express";
import { IFriend } from "../models/friend";
import { FriendService } from "../services/firend.service";

const friendService = new FriendService();

export async function postFriend(req: Request, res: Response): Promise<void> {
    try{
        const friend = req.body as IFriend;
        const newFriend = await friendService.postFriend(friend);
        res.status(201).json(newFriend);
    }catch(error: any){
        res.status(400).json(error);
    }
}
export async function getAllFriendsWithData(req: Request, res: Response): Promise<void> {
    try{
        const friends = await friendService.getAllFriendsWithData();
        res.status(201).json(friends);

    }catch(error: any){
        res.status(400).json(error);
    }
}
export async function getFriendById(req: Request, res: Response): Promise<void> {
    try{
        const friend = await friendService.getFriendById(req.params.id);
        res.status(201).json(friend);

    }catch(error: any){
        res.status(400).json(error);
    }
}
export async function updateFriendById(req: Request, res: Response): Promise<void> {
    try{
        const updatedFriend = await friendService.updateFriendById(req.params.id,req.body as IFriend);
        res.status(201).json(updatedFriend);
    }catch(error: any){
        res.status(400).json(error);
    }
}
export async function deleteFriendById(req: Request, res: Response): Promise<void> {
    try{
        const deletedFriend = await friendService.deleteFriendById(req.params.id);
        res.status(201).json(deletedFriend);
    }catch(error: any){
        res.status(400).json(error);
    }
}