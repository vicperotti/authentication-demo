import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connection.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class User extends Model {}

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: { type: STRING, allowNull: false, unique: true },
    firstName: { type: STRING, allowNull: false },
    lastName: { type: STRING, allowNull: false },
    passwordHash: { type: STRING, allowNull: false },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "user",
      plural: "users",
    },
  }
);

await dbConnection.sync();

export { User };
