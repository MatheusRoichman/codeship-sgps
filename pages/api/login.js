import { storage } from "../../utils";

export default function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(405).send({ error: "METHOD_NOT_ALLOWED" });
    }
  
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ message: "INVALID_DATA" });
    }
  
    const userFound = storage.users[storage.users.findIndex(user => user.email === email && user.password === password)];
    const adminFound = storage.companies[storage.companies.findIndex(company => company.admin.email === email && company.admin.password === password)];
  
    if (!userFound && !adminFound) {
      return res.status(400).json({ message: "INVALID_LOGIN" });
    }
  
    const userData = userFound || adminFound;
    const userType = userFound ? 'user' : 'company';
  
    return res.status(200).json({
      ...userData,
      role: userType,
      token: "Bearer valid_access_token"
    });
  } catch (err) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}