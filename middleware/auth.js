import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = await jwt.verify(req.cookies.mytoken, process.env.ID);
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).send();
  }
}

export default auth;