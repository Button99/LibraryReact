import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, dropDups: true},
    password: {type: String, required: true}
});

const adminModel= mongoose.model("Admin", adminSchema);

export default adminModel;