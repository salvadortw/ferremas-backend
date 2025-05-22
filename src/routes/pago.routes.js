const express = require("express");
const { createPaymentIntent } = require("../services/stripe");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/pagar", verifyToken, async (req, res) => {
  const { monto } = req.body;

  if (!monto || typeof monto !== "number") {
    return res.status(400).json({ message: "Monto inválido" });
  }

  try {
    const intent = await createPaymentIntent(monto);
    res.json({ clientSecret: intent.client_secret });
  } catch (error) {
    console.error("Error al crear intento de pago:", error);
    res.status(500).json({ message: "Error al procesar el pago" });
  }
});

module.exports = router;
