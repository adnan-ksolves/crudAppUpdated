import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    standard: String,
    pass: String
});

const Students = new mongoose.model("Student", newSchema);

export default Students;