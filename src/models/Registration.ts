import mongoose, { Schema, Document } from 'mongoose';

export interface IRegistration extends Document {
  name: string;
  email: string;
  registrationNumber: string;
  specialization: string;
  institution: string;
  createdAt: Date;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    specialization: { type: String, required: true },
    institution: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>('Registration', RegistrationSchema);
