import mongoose from 'mongoose';

export interface IActivity {
  userId: string;
  type: string;
  distance: number;
  duration: number;
  calories: number;
  date: Date;
}

const activitySchema = new mongoose.Schema<IActivity>(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, required: true, default: () => new Date() },
  },
  { timestamps: true }
);

const Activity = mongoose.model<IActivity>('Activity', activitySchema);
export default Activity;
