const allowedUsers=require("../utils/allowedUsers")

function login(req, res) {
  try {
    const { email, password } = req.query;
    let access = false;
    allowedUsers.forEach((user) => {
      if (user.email === email && user.password === password) {
        access = true;
      }
    });

    return res.status(200).json({ access });
  } catch (error) {
    return res.status(403).send(error);
  }
}

module.exports = { login };