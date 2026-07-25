import mongoose from 'mongoose';

export interface ITeam {
  name: string;
  description: string;
  members: number;
  score: number;
  createdAt: Date;
}

const teamSchema = new mongoose.Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    members: { type: Number, required: true, default: 0 },
    score: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Team = mongoose.model<ITeam>('Team', teamSchema);
export default Team;
