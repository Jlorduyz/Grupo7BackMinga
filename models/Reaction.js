import { Schema, model } from "mongoose";

let collection = "reactions";

const schema = new Schema({
    manga_id:{type: Schema.Types.ObjectId,ref: "User",required: true},
    author_id:{type: Schema.Types.ObjectId,ref: "User"},
    company_id:{type: Schema.Types.ObjectId,ref: "User"},
    reaction:{type: String,required: true},
}
);

let Reaction = model(collection,schema);
export default Reaction