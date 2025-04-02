// // const User = require("../models/User");
// // const Product = require("../models/Product");

// // const getApprovedProducts = async (req, res) => {
// //   try {
// //     const products = await Product.findAll({
// //       where: { status: "pending" },
// //       include: [{ model: User, attributes: ["name"] }],
// //     });

// //     const formattedProducts = products.map((product) => ({
// //       id: product.id,
// //       name: product.name,
// //       price: product.price,
// //       image: product.image,
// //       providerName: product.Provider.name,
// //     }));

// //     res.json(formattedProducts);
// //   } catch (error) {
// //     console.error("Error fetching approved products:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };
// // module.exports = { getApprovedProducts };
// // const Product = require("../models/Product");

// // const getApprovedProducts = async (req, res) => {
// //   try {
// //     const products = await Product.find({ status: "pending" }).populate(
// //       "provider",
// //       "name"
// //     ); // افترض أن لديك مرجعًا للمزود
// //     res.status(200).json(products);
// //   } catch (error) {
// //     console.error("Error fetching approved products:", error);
// //     res.status(500).json({ message: "Failed to fetch products" });
// //   }
// // };

// // module.exports = { getApprovedProducts };
// const Product = require("../models/Product");

// const getApprovedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ status: "pending" }).populate(
//       "provider",
//       "name"
//     );
//     const formattedProducts = products.map((product) => ({
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0], // assuming the first image is the main image
//       providerName: product.provider?.name, // ensure provider name is added properly
//     }));
//     res.status(200).json(formattedProducts);
//   } catch (error) {
//     console.error("Error fetching approved products:", error);
//     res.status(500).json({ message: "Failed to fetch products" });
//   }
// };

// module.exports = { getApprovedProducts };
const Product = require("../models/Product");

const getApprovedProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: "approved" }).populate(
      "provider",
      "name"
    );
    const formattedProducts = products.map((product) => ({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0], // assuming the first image is the main image
      providerName: product.provider?.name, // ensure provider name is added properly
    }));
    res.status(200).json(formattedProducts);
  } catch (error) {
    console.error("Error fetching approved products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.productId).populate(
//       "provider",
//       "name"
//     );
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).json({ message: "Failed to fetch product" });
//   }
// };
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
      .populate("provider", "name")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name",
        },
      });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};
module.exports = { getApprovedProducts, getProductById };
