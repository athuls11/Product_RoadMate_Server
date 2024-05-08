import { client } from "../db/connection.js";

export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newProduct = await client.query(
      "INSERT INTO product(name) VALUES($1) RETURNING *",
      [name]
    );
    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: newProduct.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const listAndSearchProducts = async (req, res, next) => {
  try {
    const { term } = req.query;
    const query = "SELECT * FROM product";
    const products = await client.query(query);

    let filteredProducts = products.rows;
    if (term) {
      const keywords = term.split(" ").map((keyword) => keyword.toLowerCase());
      filteredProducts = filteredProducts.filter((item) => {
        return keywords.every((keyword) => {
          return item.name.toLowerCase().includes(keyword);
        });
      });
    }
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully.",
      data: filteredProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    next(error);
  }
};
