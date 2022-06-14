import { storage } from "../../../utils";

export default function handler(req, res) {
  try {
    const idInQuery = parseInt(req.query.id);

    switch (req.method) {
      case "GET":
        const productFound = storage.products.findIndex((product) => product.id === idInQuery)
        
        if (productFound < 0) {
          return res.status(404).json({ message: "PRODUCT_NOT_FOUND" });
        }

        return res.status(200).json(storage.products[productFound])

      default:
        return res.status(405).json({ message: "METHOD_NOT_ALLOWED" });
    } 
  } catch (err) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}