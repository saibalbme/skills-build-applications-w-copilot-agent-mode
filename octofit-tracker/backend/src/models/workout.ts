import mongoose from 'mongoose';

export interface IWorkout {
  name: string;
  description: string;
  duration: number;
  difficulty: string;
  category: string;
  createdAt: Date;
}

const workoutSchema = new mongoose.Schema<IWorkout>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    difficulty: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
export default Workout;
