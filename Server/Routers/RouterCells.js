const Auth0User = require("../Model/Mongodb/Modeling/ModelingControl");

const GetProtectedData = require("../Auth0/postAuth0/Auth0Cells/GetProtectedCell");

const StoreCartDetailIntoDatabase = async (req, res) => {
  try {
    const cartDetails = req?.body?.data;
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    const response = await GetProtectedData(accessToken);
    Auth0User.findOneAndUpdate(
      { sub: response?.data?.sub },
      {
        $push: {
          templateDownload: cartDetails,
        },
      },
      (err,result) => {
        if (result !== null) {
          console.log("Cart is Added into Database");
        } else {
          console.log("Document not available");
        }
      },
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = StoreCartDetailIntoDatabase;
