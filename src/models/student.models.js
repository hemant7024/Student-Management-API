import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
        type:String,
        required:[true, "FullName is required"],
        trim:true,
        maxlength:[20, "Full name cannot exceed 20 characters"],
        minlength:[3, "Full name must be at least 3 character"]
    },
    email: {
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        match: [  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ , "Invalid email format"]
    },
    password: {
        type:String,
        required:true,
        minlength:[8, "Password must be 8 characters"],
        maxlength:128
    },
    age: {
        type:Number,
        required:true
    },
    course: {
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
