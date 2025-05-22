const authorizeRole = (...rolesPermitidos) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.role) {
      return res
        .status(403)
        .json({ message: "Acceso denegado. Rol no encontrado." });
    }

    if (!rolesPermitidos.includes(user.role)) {
      return res
        .status(403)
        .json({ message: "Acceso denegado. Rol no autorizado." });
    }

    next();
  };
};

module.exports = authorizeRole;
