import { Schema, model } from "mongoose";

let collection = "comments";

const schema = new Schema({
    chapterid_:{type: Schema.Types.ObjectId,ref: "chapters",required: true},
    author_id:{type: Schema.Types.ObjectId,ref: "authors"},
    company_id:{type: Schema.Types.ObjectId,ref: "companies"},
    message:{type: String,required: true},
}
);

let Comment = model(collection,schema);
export default Comment