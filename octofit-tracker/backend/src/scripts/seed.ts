import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    console.log('Seed the octofit_db database with test data');

    const User = (await import('../models/user')).default;
    const Team = (await import('../models/team')).default;
    const Activity = (await import('../models/activity')).default;
    const Leaderboard = (await import('../models/leaderboard')).default;
    const Workout = (await import('../models/workout')).default;

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Avery Fit', email: 'avery@octofit.com', role: 'member', active: true },
      { name: 'Jordan Pace', email: 'jordan@octofit.com', role: 'coach', active: true },
      { name: 'Reese Sprint', email: 'reese@octofit.com', role: 'member', active: true },
    ]);

    const teams = await Team.create([
      { name: 'Velocity Vipers', description: 'High-intensity runners and sprinters', members: 8, score: 1860 },
      { name: 'Cardio Crew', description: 'Endurance cyclists and rowers', members: 12, score: 1730 },
      { name: 'Core Crushers', description: 'Strength and flexibility focused squad', members: 10, score: 1605 },
    ]);

    const activities = await Activity.create([
      { userId: users[0]._id.toString(), type: 'run', distance: 5.2, duration: 32, calories: 420, date: new Date('2026-07-20T07:30:00Z') },
      { userId: users[1]._id.toString(), type: 'cycle', distance: 18.7, duration: 55, calories: 620, date: new Date('2026-07-20T08:15:00Z') },
      { userId: users[2]._id.toString(), type: 'strength', distance: 0, duration: 45, calories: 350, date: new Date('2026-07-19T17:00:00Z') },
    ]);

    const leaderboard = await Leaderboard.create([
      { rank: 1, entityType: 'user', entityName: 'Avery Fit', score: 1240 },
      { rank: 2, entityType: 'team', entityName: 'Velocity Vipers', score: 1120 },
      { rank: 3, entityType: 'user', entityName: 'Jordan Pace', score: 1180 },
    ]);

    const workouts = await Workout.create([
      { name: 'HIIT Blast', description: 'Short interval workout that spikes heart rate.', duration: 30, difficulty: 'medium', category: 'cardio' },
      { name: 'Recovery Flow', description: 'Low-impact session for active recovery.', duration: 20, difficulty: 'easy', category: 'stretch' },
      { name: 'Strength Builder', description: 'Full-body circuit combining weights and bodyweight.', duration: 45, difficulty: 'hard', category: 'strength' },
    ]);

    console.log('Seeded users:', users.length);
    console.log('Seeded teams:', teams.length);
    console.log('Seeded activities:', activities.length);
    console.log('Seeded leaderboard entries:', leaderboard.length);
    console.log('Seeded workouts:', workouts.length);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
