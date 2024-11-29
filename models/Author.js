import {model, Schema} from "mongoose";

let collection = "authors";

const schema = new Schema ({
    name:{type: String,required: true},
    lastName:{type: String,required: true},
    city:{type: String,required: true},
    country:{type: String,required: true},
    photo:{type: String,required: true},
    userId:{type: Schema.Types.ObjectId,ref: "User",required: true},
    active:{type: Boolean,required: true}
},{
    timestamps: true,
})

let Author = model(collection,schema);
export default Author