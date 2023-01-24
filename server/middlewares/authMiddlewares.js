const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;

// module.exports = async(req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         // const decodedToken = jwt.verify(token, jwtSecretKey);
//         jwt.verify(token, jwtSecretKey, (err, decoded) => {
//             if (err) {
//                 return res.status(401).send({
//                     message: "Authentication Failed",
//                     success: false
//                 })
//             } else {
//                 console.log("decoded", decoded);
//                 req.userId = decoded.id
//                 next();
//             }
//         })

//     } catch (error) {
//         console.log("authMiddleware error", error);
//         res.status(401).send({
//             message : "Authentication Failed",
//             success : false
//         })
//     }
// }

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Authentication Failed",
          success: false,
        });
      } else {
        // console.log("decoded", decoded);
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    console.log("authMiddleware error", error);
    res.status(401).send({
      message: "Authentication Failed",
      success: false,
    });
  }
};
