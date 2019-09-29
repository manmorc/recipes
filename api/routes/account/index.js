const accountService = require('./account.service');

let express = require('express');
let router = express.Router();

/* GET home page. */
router.post('/', async function(req, res, next) {
  let result;

  try {
    result = await accountService.create(req.body);
  } catch(err) {
    console.log('err: ', err);
  }

  console.log('recipe: ', result);

  res.send('test success');});

module.exports = router;
