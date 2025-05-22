const contactos = []; // almacenamiento temporal en memoria

const crearContacto = (req, res) => {
  const { cliente, vendedorId, mensaje } = req.body;

  if (!cliente || !vendedorId || !mensaje) {
    return res.status(400).json({
      message:
        "Datos incompletos: cliente, vendedorId y mensaje son obligatorios.",
    });
  }

  const nuevoContacto = {
    id: contactos.length ? contactos[contactos.length - 1].id + 1 : 1,
    cliente,
    vendedorId,
    mensaje,
    fecha: new Date().toISOString(),
  };

  contactos.push(nuevoContacto);
  res.status(201).json(nuevoContacto);
};

const obtenerContactos = (req, res) => {
  res.json(contactos);
};

module.exports = {
  crearContacto,
  obtenerContactos,
};
