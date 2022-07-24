const axios = require("axios");

const GetProtectedData = (accessToken) => {
  const response = axios.get("https://webfork-028989.us.auth0.com/userinfo", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

module.exports = GetProtectedData;
