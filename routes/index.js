import express from 'express';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/onepiece', (req, res, next) => {
  res.json('The One Piece is real!!!!!');
});

function myLogger(req, res, next) {
  console.log(req.query);
  next()
}

router.get('/appointments', myLogger, (req, res, next) => {
  res.json({
    'title': 'Its real',
    'url': 'url-to-itself',
    'query': req.query,
    'appointments': [
      'http://my-domain/appointments/1'
    ],
  })
  res.json('Wednesday: One Piece film Red');
});

router.post('/appointments', myLogger, (req, res, next) => {
  res.json('Wednesday: One Piece film Red');
});

router.options('/appointments', myLogger, (req, res, next) => {
  res.header({
    allow: "PUT, GET, OPTIONS"
  });
  res.json('Wednesday: One Piece film Red');
});

router.get('/class', myLogger, (req, res, next) => {

});



export default router;
