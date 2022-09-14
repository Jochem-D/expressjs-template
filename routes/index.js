import express from 'express';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

export default router;
