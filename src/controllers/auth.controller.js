const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../data/users");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.user === username);

  if (!user) {
    return res.status(401).json({ message: "Usuario no encontrado" });
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { user: user.user, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({ token, role: user.role });
};

module.exports = { login };
