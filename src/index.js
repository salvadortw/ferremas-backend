const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

dotenv.config();

const app = express();

const swaggerDocument = YAML.load(
  path.join(__dirname, "..", "docs", "openapi.yaml")
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/auth.routes");
const productosRoutes = require("./routes/productos.routes");
const pedidosRoutes = require("./routes/pedidos.routes");
const pagoRoutes = require("./routes/pago.routes");
const monedaRoutes = require("./routes/moneda.routes");
const contactosRoutes = require("./routes/contactos.routes");
const sucursalesRoutes = require("./routes/sucursales.route");
const vendedoresRoutes = require("./routes/vendedores.route");

app.use(cors());
app.use(express.json());
app.use("/api/pedidos", pedidosRoutes);
app.use("/api", pagoRoutes);
app.use("/api/moneda", monedaRoutes);
app.use("/api/contactos", contactosRoutes);
app.use("/api/sucursales", sucursalesRoutes);
app.use("/api/vendedores", vendedoresRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando. Visita /api-docs para la documentación");
});

app.use("/api/auth", authRoutes);

app.use("/api/productos", productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
});
