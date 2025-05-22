# FERREMAS - Backend API

FERREMAS es una API RESTful diseñada para gestionar el catálogo, pedidos y operaciones internas de una ferretería mayorista, incluyendo autenticación, control de acceso por roles, pasarela de pagos y conversión de divisas.

---

## 🛠️ Tecnologías utilizadas

- **Node.js** + **Express.js** – Framework backend
- **JWT** – Autenticación basada en tokens
- **Swagger / OpenAPI** – Documentación de la API
- **Stripe API** – Pasarela de pagos
- **Microservicio Flask (BCCH API)** – Conversión de divisas (CLP/USD)
- **Axios** – Cliente HTTP

---

## 📦 Estructura del proyecto

```plaintext
ferremas-backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── data/
│   ├── services/
│   └── index.js
│
├── docs/
│   └── openapi.yaml
│
├── .env
├── .gitignore
├── README.md
└── package.json
```

---

## 🔐 Funcionalidades principales

- Autenticación de usuarios con JWT
- Control de acceso basado en roles (admin, vendedor, cliente)
- Gestión y consulta de productos (incluyendo novedades y promociones)
- Gestión de pedidos (mono y multiproducto)
- Contacto con vendedor
- Consulta de sucursales y vendedores
- Pasarela de pagos con Stripe
- Conversión de divisas a través de microservicio externo
- Documentación Swagger disponible en `/api-docs`

---

## 🔗 Endpoints principales

| Método | Ruta                           | Descripción                               | Acceso           |
| ------ | ------------------------------ | ----------------------------------------- | ---------------- |
| POST   | `/api/login`                   | Iniciar sesión                            | Público          |
| GET    | `/api/productos`               | Obtener todos los productos               | Público          |
| GET    | `/api/productos/:id`           | Obtener un producto por ID                | Público          |
| GET    | `/api/productos/novedades`     | Obtener productos marcados como novedades | Público          |
| GET    | `/api/productos/promociones`   | Obtener productos en promoción            | Público          |
| GET    | `/api/sucursales`              | Obtener lista de sucursales               | Público          |
| GET    | `/api/vendedores`              | Obtener todos los vendedores              | Público          |
| GET    | `/api/vendedores/:id`          | Obtener vendedor por ID                   | Público          |
| GET    | `/api/vendedores/sucursal/:id` | Vendedores por sucursal                   | Público          |
| POST   | `/api/pedidos`                 | Crear nuevo pedido (requiere token)       | Autenticado      |
| GET    | `/api/pedidos`                 | Obtener todos los pedidos                 | Admin / Vendedor |
| GET    | `/api/pedidos/:id`             | Obtener pedido por ID                     | Admin / Vendedor |
| POST   | `/api/contactos`               | Enviar mensaje de contacto a vendedor     | Autenticado      |
| GET    | `/api/contactos`               | Obtener mensajes de contacto              | Admin / Vendedor |
| GET    | `/api/moneda/dolar`            | Obtener valor actual del dólar            | Público          |
| POST   | `/api/pago`                    | Crear pago con Stripe                     | Autenticado      |

---

## 📘 Documentación

La documentación Swagger está disponible en:  
➡️ [`/api-docs`](http://localhost:3000/api-docs) (modo local)  
➡️ [`https://ferremas-backend-production.up.railway.app/api-docs`](https://ferremas-backend-production.up.railway.app/api-docs) (producción)

---

## 🧪 Cómo correr el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ferremas-backend.git
cd ferremas-backend

# Instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env

# Ejecutar en modo desarrollo
npm run dev
```
