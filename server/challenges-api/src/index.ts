import express from 'express';
var cors = require('cors');
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});

const checkScopes = requiredScopes('read:challenges');

app.use(cors());
// enforce on all endpoints
app.use(jwtCheck);

app.get('/challenges', checkScopes, function (_req: any, res: any) {
  res.json({
    challenge1: 'this is the chalenge one',
    challenge2: 'another challenge',
  });
});

app.listen(port);

console.log('CHALLENGES-API running on port: ', port);
