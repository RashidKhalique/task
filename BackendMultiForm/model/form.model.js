import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  userProfile: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dateOfBirth: { type: Date, required: true },
  },
  contactInfo: {
    phoneNumber: { type: String, required: true },
    alternatePhoneNumber: { type: String },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    postalcode: { type: String, required: true },
    country: { type: String, required: true },
  },
  employmentInfo: {
    jobTitle: { type: String, required: true },
    employmentStatus: { type: String, enum: ['Employed', 'Unemployed', 'Student'], required: true },
    companyName: { type: String },
    experience: { type: Number, required: true },
    resume: { type: String },
  },
  financialInfo: {
    monthlyIncome: { type: Number, required: true },
    loanStatus: { type: String, enum: ['Yes', 'No'], required: true },
    loanAmount: { type: Number },
    creditScore: { type: Number, required: true },
  },
  preferences: {
    preferences: { type: String, enum: ['Email', 'Phone', 'SMS'], required: true },
    hobbies: { type: [String] },
    newsletterSubscription: { type:String, required: true },
  },
});
const form = mongoose.model('Form', formSchema);

export default form;
