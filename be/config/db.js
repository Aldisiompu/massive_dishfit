import { Sequelize } from "sequelize";

const db = new Sequelize("dishfit", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
