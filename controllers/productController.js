import { db } from "../db/connection.js";

export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const sql = `INSERT INTO products (name) VALUES (?)`;
    db.query(sql, [name]);
    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

export const listAndSearchProducts = async (req, res) => {
  try {
    const { term } = req.query;
    const sql = "SELECT * FROM products";
    const results = await new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    let products = results.map((row) => ({ id: row.id, name: row.name }));
    if (term) {
      const keywords = term.split(" ").map((keyword) => keyword.toLowerCase());
      products = products.filter((item) => {
        return keywords.every((keyword) => {
          return item.name.toLowerCase().includes(keyword);
        });
      });
    }
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully.",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};
