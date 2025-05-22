require("dotenv").config();
const bcrypt = require("bcryptjs");

const users = [
  { user: "javier_thompson", password: process.env.PASSWORD_JAVIER },
  { user: "ignacio_tapia", password: process.env.PASSWORD_IGNACIO },
  { user: "stripe_sa", password: process.env.PASSWORD_STRIPE },
];

(async () => {
  for (const u of users) {
    if (!u.password) {
      console.error(`Password no definida para el usuario ${u.user}`);
      continue;
    }
    const hash = await bcrypt.hash(u.password, 10);
    console.log(`{ user: '${u.user}', password: '${hash}', role: '...' },`);
  }
})();
