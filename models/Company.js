import { Schema, model } from "mongoose";

let collection = "companies";

const schema = new Schema({
    name:{type: String,required: true},
    webSite:{type: String,required: true},
    description:{type: String,required: true},
    photo:{type: String,required: true},
    userId:{type: Schema.Types.ObjectId,ref: "User",required: true},
    active:{type: Boolean,required: true}
},{
    timestamps: true,
}
);

let Company = model(collection,schema);
export default Company