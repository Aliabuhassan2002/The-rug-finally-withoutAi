// import React, { useState } from "react";
// import { Minus, Plus, ShoppingCart } from 'react-feather';

// const products = [
//   { id: 1, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
//   { id: 2, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
//   { id: 3, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
//   { id: 4, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
//   { id: 5, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
//   { id: 6, name: "Rug Pad", price: 50, image: "src/assets/22159497_72902322744531.jpg" },
// ];

// const Accessories = () => {
//   const [cart, setCart] = useState([]);
//   const [quantities, setQuantities] = useState({});

//   const handleQuantityChange = (id, value) => {
//     setQuantities((prev) => ({ ...prev, [id]: Math.max(0, value) }));
//   };

//   return (
//     <div className="p-6 pt-35">
//       <h2 className="text-2xl font-bold text-center mb-6">Accessories</h2>
//       <div className="grid grid-cols-3 gap-6">
//         {products.map((product) => (
//         //   <div key={product.id} className="border rounded-lg p-4 shadow-md">
//         //     <img
//         //       src={product.image}
//         //       alt={product.name}
//         //       className="w-full h-40 object-cover rounded-md"
//         //     />
//         //     <h5 className="text-lg font-bold mt-2 text-center">{product.name}</h5>
//         //     <div className="flex justify-between items-center mt-2">
//         //       <div className="flex items-center">
//         //         <button
//         //           className="p-2 border rounded-l-lg"
//         //           onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) - 1)}
//         //         >
//         //           <Minus size={16} />
//         //         </button>
//         //         <input
//         //           type="number"
//         //           className="w-12 text-center border-t border-b"
//         //           value={quantities[product.id] || 0}
//         //           onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
//         //         />
//         //         <button
//         //           className="p-2 border rounded-r-lg"
//         //           onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) + 1)}
//         //         >
//         //           <Plus size={16} />
//         //         </button>
//         //       </div>
//         //       <span className="text-xl font-bold">${product.price}</span>
//         //     </div>
//         //     <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg flex justify-center items-center gap-2">
//         //       <ShoppingCart size={16} /> Add to Cart
//         //     </button>
//         //   </div>

//         <div key={product.id} className="border rounded-lg p-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-full h-40 object-cover rounded-md mb-4" // Added margin-bottom
//     />
//     <h5 className="text-lg font-bold text-center mb-2">{product.name}</h5> {/* Added margin-bottom */}
//     <div className="flex justify-between items-center mb-3"> {/* Added margin-bottom */}
//       <div className="flex items-center">
//         <button
//           className="p-2 border rounded-l-lg bg-gray-100 hover:bg-gray-200" // Added background color and hover effect
//           onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) - 1)}
//         >
//           <Minus size={16} />
//         </button>
//         <input
//           type="number"
//           className="w-12 text-center border-t border-b focus:outline-none" // Added focus outline removal
//           value={quantities[product.id] || 0}
//           onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
//         />
//         <button
//           className="p-2 border rounded-r-lg bg-gray-100 hover:bg-gray-200" // Added background color and hover effect
//           onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) + 1)}
//         >
//           <Plus size={16} />
//         </button>
//       </div>
//       <span className="text-xl font-bold">${product.price}</span>
//     </div>
//     <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 transition duration-300"> {/* Added hover effect and transition */}
//       <ShoppingCart size={16} /> Add to Cart
//     </button>
//   </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accessories;

// import React, { useEffect, useState } from "react";
// import { ShoppingCart, Minus, Plus,Heart,Eye } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../../ProductSlice";
// import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';

// const products = [
//  { id: 1, name: "Luxury Wool Rug", price: 120, image: "src/assets/rug1/f1.webp" },
//   { id: 2, name: "Vintage Persian Rug", price: 200, image: "src/assets/rug1/f3.webp" },
//   { id: 3, name: "Modern Geometric Rug", price: 150, image: "src/assets/rug4/stephanie-harvey-yr45Zv1MM94-unsplash.jpg" },
//   { id: 4, name: "Classic Oriental Rug", price: 180, image: "src/assets/rug4/trend-K9pU2u0Z5WU-unsplash.jpg" },
//   { id: 5, name: "Soft Shaggy Rug", price: 90, image: "/src/assets/Rugs/alex-shu-8gNbhF5AGcs-unsplash.jpg" },
//   { id: 6, name: "Minimalist Area Rug", price: 130, image: "/src/assets/Rugs/beazy-jylx7bVZMIk-unsplash.jpg" },
//   { id: 7, name: "Bohemian Style Rug", price: 175, image: "/src/assets/Rugs/beazy-RuCVvjuyNeQ-unsplash.jpg" },
//   { id: 8, name: "Handwoven Jute Rug", price: 110, image: "/src/assets/Rugs/erfan-banaei-p00r5JmTMpY-unsplash.jpg" },
//   { id: 9, name: "Elegant Floral Rug", price: 160, image: "/src/assets/Rugs/claudio-schwarz-yxIZiUQghR8-unsplash.jpg" },
//   { id: 10, name: "Scandinavian Wool Rug", price: 190, image: "/src/assets/Rugs/spacejoy--7QwG_Gu2tg-unsplash.jpg" },
//   { id: 11, name: "Cozy Plush Rug", price: 95, image: "/src/assets/Rugs/jennifer-latuperisa-andresen-GM7cm1IC6Ss-unsplash.jpg" },
//   { id: 12, name: "Artistic Abstract Rug", price: 140, image: "/src/assets/Rugs/lu-jianfeng-QuMvwbkOvVQ-unsplash.jpg" },
//   { id: 13, name: "Classic Moroccan Rug", price: 170, image: "/src/assets/Rugs/spacejoy-RUvW1KGD9a4-unsplash.jpg" },
//   { id: 14, name: "Luxury Silk Rug", price: 250, image: "/src/assets/Rugs/spacejoy-x0Nw1Gvi6mQ-unsplash.jpg" }
// ];

// const Shop = () => {
//     const [hoveredId, setHoveredId] = useState(null);

//     const cartt=useSelector((state)=>state.product.cart);
//     const dispatch=useDispatch();

// //   useEffect(() => {
// //   console.log(cartt); // Logs only when `cartt` changes
// // }, [cartt]);

//   function increaseCounter(product){

//       dispatch(increment(product));
//     }

//   return (
//     // <div className=" flex flex-col justify-center p-6 pt-35">
//     //   <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
//     // <div className="p-6 grid grid-cols-3 gap-6 justify-center ml-33">
//     //   {products.map((product) => (
//     //     <div key={product.id} className="w-72 border rounded-lg shadow-lg overflow-hidden">
//     //         <Link to={"/details"}>
//     //       <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
//     //         </Link>
//     //       <div className="p-4">
//     //         <div className="flex justify-between items-center mb-2">
//     //           <h5 className="text-lg font-bold">{product.name}</h5>
//     //           <button className="button"  onClick={ increaseCounter }

//     //           >

//     //           <ShoppingCart size={20} className="text-gray-600 text-stone-600" />
//     //           </button>
//     //         </div>
//     //         <div className="flex justify-between items-center">
//     //           <div className="flex items-center border rounded-md overflow-hidden">
//     //             <button
//     //               className="p-2 bg-gray-200"

//     //             >
//     //               <Minus size={16} />
//     //             </button>
//     //             <input
//     //               type="number"
//     //               className="w-12 text-center border-t border-b"
//     //             min={0}

//     //             />
//     //             <button
//     //               className="p-2 bg-gray-200"

//     //             >
//     //               <Plus size={16} />
//     //             </button>
//     //           </div>
//     //           <p className="text-xl font-bold">${product.price}</p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//     // </div>
//     <div className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-6 lg:px-8 pt-35">
//       <h2 className="text-3xl font-bold text-center mb-16 text-amber-800 relative">
//         <span className="relative z-10 px-6">Our Products</span>
//         <span className="absolute inset-x-0 bottom-2 h-3 bg-amber-100 transform -skew-x-12"></span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
//             style={{
//               borderRadius: '16px',
//               boxShadow: '0 8px 20px rgba(251, 231, 198, 0.3)',
//               background: 'linear-gradient(135deg, #ffffff 0%, #fdf6e8 100%)'
//             }}
//             onMouseEnter={() => setHoveredId(product.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             {/* Border accent */}
//             <div className="absolute inset-0 border-2 border-amber-200 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"
//                  style={{ borderColor: '#fbe7c6' }}></div>

//             {/* Corner accent */}
//             <div className="absolute -top-8 -right-8 w-20 h-20 bg-amber-100 rotate-12 transform transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 z-0"
//                  style={{ backgroundColor: '#fbe7c6' }}></div>

//             {/* Badge */}
//             <div className="absolute top-4 left-4 z-10 bg-white text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm transition-all duration-300 group-hover:bg-amber-800 group-hover:text-white"
//                  style={{ borderLeft: '4px solid #fbe7c6' }}>
//               New Arrival
//             </div>

//             {/* Wishlist button */}
//             <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-amber-50">
//               <Heart size={18} className="text-amber-500 transition-colors duration-300 hover:text-red-500" />
//             </button>

//             {/* Image container */}
//             <div className="relative overflow-hidden z-0">
//               <Link to="/details" className="block">
//                 <div className="relative h-64 overflow-hidden bg-amber-50">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-105"
//                   />

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-amber-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>

//                 {/* Action buttons overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                   {/* <button
//                     className="bg-white/90 backdrop-blur-sm text-amber-800 p-3 rounded-full shadow-lg hover:bg-amber-50 transition-all duration-300 hover:scale-110"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       increaseCounter(product);
//                     }}
//                   >
//                     <ShoppingCart size={20} />
//                   </button> */}
//                   <Link to="/details"
//                     className="bg-white/90 backdrop-blur-sm text-amber-800 p-3 rounded-full shadow-lg hover:bg-amber-50 transition-all duration-300 hover:scale-110"
//                   >
//                     <Eye size={20} />
//                   </Link>
//                 </div>
//               </Link>
//             </div>

//             {/* Product info */}
//             <div className="p-6 relative z-10 bg-white/60 backdrop-blur-sm">
//               <Link to="/details" className="block">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1 transition-all duration-300 group-hover:text-amber-800 group-hover:translate-x-1">
//                   {product.name}
//                 </h3>
//               </Link>

//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className={`text-xs transition-colors duration-300 ${i < 4 ? 'text-amber-400' : 'text-gray-300'} group-hover:scale-110`}>★</span>
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-500 ml-1 transition-opacity duration-300 group-hover:opacity-80">(42)</span>
//                 </div>
//                 <p className="text-xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:text-amber-800"
//                    style={{ textShadow: 'group-hover:0 1px 2px rgba(251, 231, 198, 0.6)' }}>
//                   ${product.price}
//                 </p>
//               </div>

//               <div className="flex items-center justify-between pt-3 border-t border-amber-100">
//                 <div className="flex items-center border rounded-lg overflow-hidden transition-all duration-300 hover:border-amber-300"
//                      style={{ backgroundColor: 'rgba(251, 231, 198, 0.2)' }}>
//                   <button
//                     className="p-1.5 text-amber-600 hover:bg-amber-100 transition-colors duration-300"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <input
//                     type="number"
//                     className="w-10 text-center bg-white/60 py-1 text-sm border-x border-amber-100 focus:outline-none"
//                     min={0}
//                     defaultValue={1}
//                   />
//                   <button
//                     className="p-1.5 text-amber-600 hover:bg-amber-100 transition-colors duration-300"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>

//                 <button
//                   onClick={()=>{increaseCounter(product)}}
//                   className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-300 hover:gap-3 group-hover:shadow-md"
//                   style={{
//                     background: 'linear-gradient(to right, #fbe7c6, #f8d49a)',
//                     color: '#7c5e28'
//                   }}
//                 >
//                   <span className="text-sm font-medium">Add to Cart</span>
//                   <ShoppingCart size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Shop;

// import React, { useEffect, useState } from "react";
// import { ShoppingCart, Minus, Plus, Heart, Eye } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../../ProductSlice";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Shop = () => {
//     const [products, setProducts] = useState([]);
//     const dispatch = useDispatch();
//     const cartt = useSelector((state) => state.product.cart);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5000/api/products/approved");
//                 setProducts(response.data);  // تأكد أن API يعيد قائمة المنتجات المعتمدة مع تفاصيل المزود
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };
//         fetchProducts();
//     }, []);

//     function increaseCounter(product) {
//         dispatch(increment(product));
//     }

//     return (

//         <div className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-6 lg:px-8 pt-35">
//           {console.log(products)}
//             <h2 className="text-3xl font-bold text-center mb-16 text-amber-800 relative">
//                 <span className="relative z-10 px-6">Our Products</span>
//                 <span className="absolute inset-x-0 bottom-2 h-3 bg-amber-100 transform -skew-x-12"></span>
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
//                         style={{
//                             borderRadius: '16px',
//                             boxShadow: '0 8px 20px rgba(251, 231, 198, 0.3)',
//                             background: 'linear-gradient(135deg, #ffffff 0%, #fdf6e8 100%)'
//                         }}
//                     >
//                         {/* صورة المنتج */}
//                         <div className="relative h-64 overflow-hidden bg-amber-50">
//                             <Link to={`/details/${product.id}`} className="block">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
//                                 />
//                             </Link>
//                         </div>

//                         {/* معلومات المنتج */}
//                         <div className="p-6 relative z-10 bg-white/60 backdrop-blur-sm">
//                             <Link to={`/details/${product._id}`} className="block">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-amber-800">
//                                     {product.name}
//                                 </h3>
//                             </Link>

//                             {/* عرض اسم المزود */}
//                             <p className="text-sm text-gray-600">Provider: <span className="font-semibold">{product.providerName}</span></p>

//                             <p className="text-xl font-bold text-amber-800">${product.price}</p>

//                             <div className="flex items-center justify-between pt-3">
//                                 <button
//                                     onClick={() => increaseCounter(product)}
//                                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
//                                 >
//                                     <ShoppingCart size={16} />
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { increment } from "../../ProductSlice"; // Adjust the path as needed
// import { ShoppingCart } from "phosphor-react";

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.product.cart);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/products/approved"
//         );
//         setProducts(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   function increaseCounter(product) {
//     dispatch(increment(product));
//   }

//   return (
//     <div className="bg-gradient-to-b from-[#FAF7F0] to-[#D8D2C2] py-16 px-4 sm:px-6 lg:px-8 pt-35">
//       <h2 className="text-4xl font-extrabold text-center mb-16 text-[#4A4947] relative">
//         <span className="relative z-10 px-6">Our Products</span>
//         <span className="absolute inset-x-0 bottom-2 h-3 bg-[#FAF7F0] transform -skew-x-12"></span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2"
//             style={{
//               borderRadius: "20px",
//               boxShadow: "0 10px 25px rgba(74, 73, 71, 0.1)",
//               background: "linear-gradient(135deg, #FAF7F0 0%, #D8D2C2 100%)",
//             }}
//           >
//             {/* Product Image */}
//             <div className="relative h-64 overflow-hidden bg-[#FAF7F0]">
//               <Link to={`/details/${product.id}`} className="block">
//                 <img
//                   src={`http://localhost:5000${product.image}`}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </Link>
//             </div>

//             {/* Product Information */}
//             <div className="p-6 relative z-10 bg-white/70 backdrop-blur-md">
//               <Link to={`/details/${product.id}`} className="block">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-[#4A4947]">
//                   {product.name}
//                 </h3>
//               </Link>

//               {/* Display Provider Name */}
//               <p className="text-sm text-gray-600">
//                 Provider:{" "}
//                 <span className="font-semibold text-gray-800">
//                   {product.providerName}
//                 </span>
//               </p>

//               <p className="text-2xl font-bold text-[#4A4947]">
//                 ${product.price}
//               </p>

//               <div className="flex items-center justify-between pt-3">
//                 <button
//                   onClick={() => increaseCounter(product)}
//                   className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A4947] text-white hover:bg-[#D8D2C2] hover:text-[#4A4947] transition-all duration-300"
//                 >
//                   <ShoppingCart size={16} />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import ProductImage from "./ProductImage";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/approved"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId, quantity: 1 },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server response:", response.data);

      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
      alert(`Failed: ${error.response?.data?.message || error.message}`);
    }
  };
  if (loading) {
    return <div className="text-center py-20">Loading products...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#FAF7F0] to-[#D8D2C2] py-16 px-4 sm:px-6 lg:px-8 pt-35">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#4A4947] relative">
        <span className="relative z-10 px-6">Our Products</span>
        <span className="absolute inset-x-0 bottom-2 h-3 bg-[#FAF7F0] transform -skew-x-12"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2"
            style={{
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(74, 73, 71, 0.1)",
              background: "linear-gradient(135deg, #FAF7F0 0%, #D8D2C2 100%)",
            }}
          >
            {/* Product Image */}
            <div className="relative aspect-square">
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Information */}
            <div className="p-6 relative z-10 bg-white/70 backdrop-blur-md">
              <Link to={`/details/${product.id}`} className="block">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-[#4A4947]">
                  {product.name}
                </h3>
              </Link>

              <p className="text-sm text-gray-600">
                Provider:{" "}
                <span className="font-semibold text-gray-800">
                  {product.providerName}
                </span>
              </p>

              <p className="text-2xl font-bold text-[#4A4947]">
                {product.price} JD
              </p>

              <div className="flex items-center justify-between pt-3">
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A4947] text-white hover:bg-[#D8D2C2] hover:text-[#4A4947] transition-all duration-300"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
