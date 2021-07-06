const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
export const clientId = "4cf4914b17c340e68221b922b1d20336";

console.log(process.env.REACT_APP_REDIRECT_URI);

const scopes = ["user-top-read", "user-read-email", "user-read-private"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
