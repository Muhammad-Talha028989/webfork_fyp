const GetProtectedData = require("../Auth0Cells/GetProtectedCell");

const Auth0User = require("../../../Model/Mongodb/Modeling/ModelingControl");

const StoreDataToMongoDB = async (req, res) => {
  try {
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    const response = await GetProtectedData(accessToken);
    //? Code to print response

    let Auth0Docu = response?.data
      ? new Auth0User({
          sub: response?.data?.sub,
          nickname: response?.data?.nickname,
          name: response?.data?.name,
          picture: response?.data?.picture,
          email: response?.data?.email,
          templateDownload: [],
        })
      : "";
    if (Auth0Docu) {
      Auth0User.findOne({ sub: response?.data?.sub }, (err, results) => {
        if (results !== null) {
        } else {
          console.log("New Document is added into database");
          return Auth0Docu && Auth0Docu.save();
        }
      });
    }
    // Auth0Docu && Auth0Docu.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = StoreDataToMongoDB;
