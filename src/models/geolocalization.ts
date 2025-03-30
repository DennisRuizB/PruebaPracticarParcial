import {ObjectId, Schema, model} from 'mongoose';

export interface IGeolocalization {
  _id: ObjectId;
  shopName: string;
  positionX: number;
  positionY: number;
  userWithOrders?: ObjectId[];
}

const geolocalizationSchema = new Schema<IGeolocalization>({ 
  shopName: {type: String, required: true},
  positionX: {type: Number, required: true},
  positionY: {type: Number, required: true},
  userWithOrders: [{type: Schema.Types.ObjectId, ref: "Users" }]


});

export const GeolocalizationModel = model("Geolocalization", geolocalizationSchema);