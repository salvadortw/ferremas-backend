const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const authorizeRole = require("../middlewares/authorizeRole");
const {
  crearContacto,
  obtenerContactos,
} = require("../controllers/contactos.controller");

router.post("/", verifyToken, crearContacto);

router.get(
  "/",
  verifyToken,
  authorizeRole("admin", "vendedor"),
  obtenerContactos
);

module.exports = router;
