import { storage } from "../../../utils";

export default function handler(req, res) { 
  try {
    const { name, birthDate, cpf, phone, email, password } = req.body;
    const lastUserId = storage.users[storage.users.length - 1].id;
    const newUserId = lastUserId + 1;
    const userAlreadyExists = storage.users.findIndex((user) => user.cpf === cpf);

    switch (req.method) {
      case "GET":
        if (!storage.users.length) {
          return res.status(404).json({ message: "USER_NOT_FOUND" })
        }
        
        return res.status(200).json(storage.users)

      case "POST":
        if (!name || !birthDate || !cpf || !phone || !email || !password) {
          return res.status(422).json({ message: "INVALID_DATA" });
        }

        if (userAlreadyExists) {
          return res.status(400).json({ message: "ALREADY_EXISTS" });
        }

        if (!validateEmail(email)) {
          return res.status(400).json({ message: "INVALID_EMAIL" });
        }

        storage.users.push({ id: newUserId, name, birthDate, cpf, phone, email, password})
        return res.status(201);

      default:
        res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
    }
  } catch (err) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}