import { Router } from 'express';
import Workout from '../models/workout';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ duration: 1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create workout', details: error });
  }
});

export default router;
