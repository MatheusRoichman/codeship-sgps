import { storage } from "../../../utils";

export default function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        if (!storage.products.length) {
          return res.status(404).json({ message: "USER_NOT_FOUND" })
        }
        
        return res.status(200).json(storage.products)
  
      case "POST":
        const { name, description, brand, category, price, weight, company_id, picture } = req.body;
        const lastProductId = storage.products[storage.products.length - 1].id;

        if (!name || !description || !brand || !category || !price || !weight || !company_id || !picture) {
          return res.status(422).json({ message: "INVALID_DATA" });
        }

        if (productAlreadyExists) {
          return res.status(400).json({ message: "ALREADY_EXISTS" });
        }

        storage.products.push({ id: lastProductId + 1, name, description, brand, category, price, weight, company_id, picture })
  
      default:
        return res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
    }
  } catch (error) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}