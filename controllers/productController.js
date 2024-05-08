import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
      },
    });
    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const listAndSearchProducts = async (req, res, next) => {
  try {
    const { term } = req.query;
    let products;

    if (term) {
      const keywords = term.split(" ").map((keyword) => keyword.toLowerCase());

      products = await prisma.product.findMany({
        where: {
          AND: keywords.map((keyword) => ({
            name: {
              contains: keyword,
              mode: "insensitive",
            },
          })),
        },
      });
    } else {
      products = await prisma.product.findMany();
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully.",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// export const listAndSearchProducts = async (req, res, next) => {
//   try {
//     const { term } = req.query;
//     let products;

//     if (term) {
//       products = await prisma.product.findMany({
//         where: {
//           name: {
//             contains: term.toString(),
//           },
//         },
//       });
//     } else {
//       products = await prisma.product.findMany();
//     }
//     return res.status(200).json({
//       success: true,
//       message: "Fetch the products successfully.",
//       data: products,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
