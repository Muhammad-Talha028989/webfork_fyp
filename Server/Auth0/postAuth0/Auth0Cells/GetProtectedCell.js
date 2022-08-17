const axios = require("axios");

const GetProtectedData = async (accessToken) => {
  const response = await axios.get(
    "https://webfork-028989.us.auth0.com/userinfo",
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return await response;
};

module.exports = GetProtectedData;
