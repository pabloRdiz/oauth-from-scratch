import queryString from 'query-string';
import { useEffect, useState } from 'react';

const dahsboard_api = 'http://localhost:8081/';
const Challenges = ({ location }: any) => {
  const { code } = queryString.parse(location.search);
  const [challengesData, setChallengesData] = useState('none');

  useEffect(() => {
    if (!code) return;

    fetch(`${dahsboard_api}challenges?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        setChallengesData(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [code]);

  return (
    <div>
      <h1>Challenges</h1>
      <h5>{challengesData}</h5>
    </div>
  );
};

export default Challenges;
