// https://developer.spotify.com
// documentation/web-playback-sdk

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-d8b45.web.app/";
const clientId = "a98e4972a94041b7b5fce71d3b8a3c6c";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
