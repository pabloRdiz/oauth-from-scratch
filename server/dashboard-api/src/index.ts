import express from 'express';
var cors = require('cors');
import axios from 'axios';
import oAuth from './middleware/oAuth';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const challengesAPIEndpoint = 'http://localhost:8080/challenges';
app.use(cors());
app.use(oAuth);

app.get('/challenges', async (req: any, res: any) => {
  try {
    const { access_token } = req.oauth;

    const response = await axios({
      method: 'get',
      url: challengesAPIEndpoint,
      headers: { Authorization: `Bearer ${access_token}` },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error(error);

    if (error.response.status === 401) {
      res.status(401).json('Unauthorized to access data');
      return;
    }

    if (error.response.status === 403) {
      res.status(403).json('Permission denied');
      return;
    }

    res.status(500).json('Whoops, something went wrong');
  }
});

app.listen(port, () => console.log('Running on port: ', port));
