import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    subject: String,
    pass: String
});

const Teachers = new mongoose.model("Teacher", newSchema);

export default Teachers;