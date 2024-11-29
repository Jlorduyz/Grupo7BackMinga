import { Schema, model } from "mongoose";

let collection = "comments";

const schema = new Schema({
    chapterid_:{type: Schema.Types.ObjectId,ref: "User",required: true},
    author_id:{type: Schema.Types.ObjectId,ref: "User"},
    company_id:{type: Schema.Types.ObjectId,ref: "User"},
    message:{type: String,required: true},
}
);

let Comment = model(collection,schema);
export default Comment