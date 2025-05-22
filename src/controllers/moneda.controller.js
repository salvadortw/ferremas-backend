const axios = require("axios");

const MICRO_URL = "https://microservicio-bbch-production.up.railway.app";

const obtenerValorDolar = async (req, res) => {
  try {
    const respuesta = await axios.get(`${MICRO_URL}/dolar`);
    const valorDolar = respuesta.data.valor_dolar;

    res.json({ valor_dolar: valorDolar });
  } catch (error) {
    console.error("Error al obtener el valor del dólar:", error.message);
    res.status(500).json({ error: "No se pudo obtener el valor del dólar" });
  }
};

const convertirClpAUsd = async (req, res) => {
  const montoCLP = parseFloat(req.params.monto);
  if (isNaN(montoCLP)) {
    return res.status(400).json({ error: "Monto inválido" });
  }

  try {
    const respuesta = await axios.get(`${MICRO_URL}/dolar`);
    const valorDolar = respuesta.data.valor_dolar;
    const montoUSD = montoCLP / valorDolar;

    res.json({
      montoCLP,
      montoUSD: montoUSD.toFixed(2),
      valorDolar,
    });
  } catch (error) {
    console.error("Error en conversión CLP a USD:", error.message);
    res.status(500).json({ error: "No se pudo realizar la conversión" });
  }
};

const convertirUsdAClp = async (req, res) => {
  const montoUSD = parseFloat(req.params.monto);
  if (isNaN(montoUSD)) {
    return res.status(400).json({ error: "Monto inválido" });
  }

  try {
    const respuesta = await axios.get(`${MICRO_URL}/dolar`);
    const valorDolar = respuesta.data.valor_dolar;
    const montoCLP = montoUSD * valorDolar;

    res.json({
      montoUSD,
      montoCLP: montoCLP.toFixed(2),
      valorDolar,
    });
  } catch (error) {
    console.error("Error en conversión USD a CLP:", error.message);
    res.status(500).json({ error: "No se pudo realizar la conversión" });
  }
};

module.exports = {
  obtenerValorDolar,
  convertirClpAUsd,
  convertirUsdAClp,
};
