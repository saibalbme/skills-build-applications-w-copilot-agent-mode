import mongoose from 'mongoose';

export interface ILeaderboardEntry {
  rank: number;
  entityType: 'user' | 'team';
  entityName: string;
  score: number;
  updatedAt: Date;
}

const leaderboardSchema = new mongoose.Schema<ILeaderboardEntry>(
  {
    rank: { type: Number, required: true },
    entityType: { type: String, required: true, enum: ['user', 'team'] },
    entityName: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
export default Leaderboard;
