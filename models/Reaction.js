import { Schema, model } from "mongoose";

let collection = "reactions";

const schema = new Schema({
    manga_id:{type: Schema.Types.ObjectId,ref: "mangas",required: true},
    author_id:{type: Schema.Types.ObjectId,ref: "authors"},
    company_id:{type: Schema.Types.ObjectId,ref: "companies"},
    reaction:{type: String,required: true},
    userId:{type: Schema.Types.ObjectId,ref: "users",required: true},
}
);

let Reaction = model(collection,schema);
export default Reaction