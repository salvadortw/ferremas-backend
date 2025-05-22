const express = require("express");
const router = express.Router();
const {
  obtenerValorDolar,
  convertirClpAUsd,
  convertirUsdAClp,
} = require("../controllers/moneda.controller");

router.get("/dolar", obtenerValorDolar);
router.get("/clp-a-usd/:monto", convertirClpAUsd);
router.get("/usd-a-clp/:monto", convertirUsdAClp);

module.exports = router;
