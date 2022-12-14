const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(httpStatus.OK).send({
    status: 'success',
    data: {
      message: 'Welcome',
    },
  });
});

module.exports = router;
