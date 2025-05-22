const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(403).json({ message: "Token requerido" });

  const token = authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(403).json({ message: "Token malformado" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: "Token inválido o expirado" });

    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
