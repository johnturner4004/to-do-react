const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/task.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json);// needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/task', router);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on PORT ', PORT);
  
})