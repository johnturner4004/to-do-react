const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM task ORDER BY id;';
  pool.query(sqlText)
  .then(result => {
    console.log('Got tasks from database', results);
    res.send(result.rows);
  })
  .catch(error => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
  });
})

module.exports = router;