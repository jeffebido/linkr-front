import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// function config (token) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

function signIn(body) {
  const promise = api.post("/signin", body);
  return promise;
}

export { signIn };
