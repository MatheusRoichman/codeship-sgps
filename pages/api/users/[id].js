import { storage } from '../../../utils';

export default function handler(req, res) {
  try {
    const idInQuery = req.query.id;  
    const userFoundWithIdInQuery = storage.users[storage.users.findIndex(user => user.id === idInQuery)];
    const { id, name, birthDate, cpf, phone, email, password } = req.body;
    const userFoundWithIdInBody = storage.users[storage.users.findIndex(user => user.id === id)];

    switch (req.method) {
      case "GET":
        if (!userFoundWithIdInQuery) {
          return res.status(404).json({ message: "USER_NOT_FOUND" })
        }

        return res.status(200).json(userFound);

      case "PUT":
        if (!id) {
          return res.status(400).json({ message: "MISSING_ID" })
        }

        if (!userFoundWithIdInBody) {
          return res.status(404).json({ message: "USER_NOT_FOUND" })
        }

        storage.users[userFoundWithIdInBody] = {
          name,
          birthDate,
          cpf,
          phone,
          email,
          password
        };

        break;

      case "DELETE":
        break;

      default:
        res.status(405).send({ error: "METHOD_NOT_ALLOWED" });
    }
  } catch (err) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}