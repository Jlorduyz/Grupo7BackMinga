import {Schema, model} from "mongoose";

let collection = "users";

const schema = new Schema({
    email:{type: String,required: true},
    password:{type: String,required: true},
    photo:{type: String,required: true},
    role:{type: Number,required: false},
    online:{type: Boolean,required: true}
},{
    timestamps: true,
});

let User = model(collection,schema);
export default User