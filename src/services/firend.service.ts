import { IFriend, FriendModel } from "../models/friend";

export class FriendService{
    async postFriend(friend: Partial<IFriend>): Promise<IFriend> {
        try{
            const newFriend = new FriendModel(friend);
            return newFriend.save();
        }catch (error: any)
        {
            console.log(error);
            throw error;
        }
    }

    async getAllFriendsWithData(): Promise<IFriend[]>{
        try{
            return FriendModel.find().populate('userId').populate('friendId').exec();
        }catch(error: any){
            console.log(error);
            throw error;
        }
    }

    async getFriendById(id: string): Promise<IFriend | null>{
        try{
            return FriendModel.findById(id);
        }catch(error: any){
            console.log(error);
            throw error;
        }
    }

    async updateFriendById(id: string, updateData: Partial<IFriend>){
        try{
            return await FriendModel.updateOne({_id: id}, {$set: updateData});

        }catch(error: any){
            console.log(error);
            throw error;
        }
    }

    async deleteFriendById(id: string){
        try{
            return FriendModel.findByIdAndDelete(id);

        }catch(error: any){
            console.log(error);
            throw error;
        }
    }
}