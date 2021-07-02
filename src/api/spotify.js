const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://all-time-client.vercel.app/";
export const clientId = "4cf4914b17c340e68221b922b1d20336";

const scopes = ["user-top-read", "user-read-email", "user-read-private"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
