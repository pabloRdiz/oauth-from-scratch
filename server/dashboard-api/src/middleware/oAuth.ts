import axios from 'axios';
require('dotenv').config();

const tokenEndpoint = process.env.TOKEN_ENDPOINT!;
const grantType = 'authorization_code';
const clientId = process.env.CLIENT_ID!;
const clientSecret = process.env.CLIENT_SECRET!;
const redirectURI = 'http://localhost:3000/challenges';

const oAuth = (req: any, res: any, next: any) => {
  const code = req.query.code;
  if (!code) res.status(401).send('Missing authorization code');

  const params = new URLSearchParams();
  params.append('grant_type', grantType);
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('code', code);
  params.append('redirect_uri', redirectURI);

  axios
    .post(tokenEndpoint, params)
    .then((response) => {
      req.oauth = response.data;
      next();
    })
    .catch((error) => {
      res.status(403).json(`Reason: ${error.message}`);
    });
};

export default oAuth;
