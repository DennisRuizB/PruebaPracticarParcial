import mongoose, { ObjectId, Schema, model } from "mongoose";

export interface IFriend{
    _id: ObjectId;
    userId: ObjectId;
    friendId: ObjectId;
    status: string;
    addedAt: Date;
}

const friendSchema = new Schema<IFriend>({
    userId:{ type: Schema.Types.ObjectId, ref:"User", required: true },
    friendId:{ type: Schema.Types.ObjectId, ref:"User", required: true },
    status:{ type: String,
        enum: ["accepted", "rejected", "pending"],
         required: true },
    addedAt:{ type: Date, default: Date.now }
});

export const FriendModel = model("Friend",friendSchema);