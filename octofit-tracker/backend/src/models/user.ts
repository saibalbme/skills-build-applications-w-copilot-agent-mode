import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  role: string;
  active: boolean;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: 'member' },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;
