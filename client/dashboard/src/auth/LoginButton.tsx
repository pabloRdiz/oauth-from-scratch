const LoginButton = () => {
  const login = async () => {
    const domain = process.env.REACT_APP_DOMAIN;
    const audience = process.env.REACT_APP_AUDIENCE;
    const scope = "read:challenges";
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const responseType = "code"; //flow
    const redirectUri = "http://localhost:3000/challenges";

    const response = await fetch(
      `https://${domain}/authorize?` +
        `audience=${audience}&` +
        `scope=${scope}&` +
        `response_type=${responseType}&` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectUri}`,
      { redirect: "manual" }
    );

    window.location.replace(response.url);
  };

  return <button onClick={login}>Login</button>;
};

export default LoginButton;
