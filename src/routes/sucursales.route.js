const express = require("express");
const router = express.Router();
const { obtenerSucursales } = require("../controllers/sucursales.controller");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, obtenerSucursales);

module.exports = router;
