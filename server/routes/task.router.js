const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const moment = require('moment');

router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM list ORDER BY id;';
  pool.query(sqlText)
  .then(result => {
    for (value of result.rows) {
      let added = value.time_added;
      added = moment(added).format('hh:mm MM/DD/YYYY');
      value.time_added = added;
      let due = value.due_date;
      due = moment(due).format('hh:mm MM/DD/YYYY');
      value.due_date = due;
      let remaining = moment(value.due_date).diff(moment());
      remaining = moment.duration(remaining);
      let years = remaining.years(), months = remaining.months(), days = remaining.days(), hours = remaining.hours(), minutes = remaining.minutes(), seconds = remaining.seconds();
      let output = '';
      years ? output+= years + ' years ' : '';
      months ? output+= months + ' months ' : '';
      days ? output+= days + ' days ' : '';
      hours ? output+= hours + ':' : output+= '00:';
      minutes > 9 ? output+= minutes + ':': minutes ? output+= '0' + minutes + ':' : output+= '00:';
      seconds > 9 ? output+= seconds : seconds ? output+= '0' + seconds : output+= '00';
      value.remaining = output;
    }
    res.send(result.rows);
  })
  .catch(error => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
  });
})

module.exports = router;