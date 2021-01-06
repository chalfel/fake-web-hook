const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const { body, params, query } = req;

  return res.status(200).json({
    body,
    params,
    query,
  })
})

app.listen('8080', () => console.log('Server listening at port 8080'))