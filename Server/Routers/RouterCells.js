
// const GetProtectedData = require("../Auth0/postAuth0/Auth0Cells/GetProtectedCell");

// const StoreCartDetailIntoDatabase = async (req, res) => {
//   try {
//     const cartDetails = req?.body?.data;
//     const accessToken = req?.headers?.authorization?.split(" ")[1];
//     const response = await GetProtectedData(accessToken)?.catch((e) =>
//       console?.error(e),
//     );
//     await Auth0User?.findOneAndUpdate(
//       { sub: response?.data?.sub },
//       {
//         $push: {
//           templateDownload: [cartDetails],
//         },
//       },
//       {
//         returnDocument: "after",
//       },
//       (err, result) => {
//         if (result !== null || result !== undefined || !err) {
//           // result?.templateDownload?.map(items => console.log(items))
//           console.log(result);
//           // res.send(result?.templateDownload)
//         } else {
//           console?.log("Document not available");
//         }
//       },
//     )
//       .clone()
//       .catch((e) => console?.error(e));
//   } catch (e) {
//     console.log(e);
//   }
// };

// module.exports = StoreCartDetailIntoDatabase;
