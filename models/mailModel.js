import mongoose from "mongoose";

const FormSubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
  
    },
    mobile: {
      type: Number,
    
    },
    email: {
      type: String,
      
    },
    message: {
      type: String,
     
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("FormSubmission", FormSubmissionSchema);
