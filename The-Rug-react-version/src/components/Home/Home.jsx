import React from "react";
import { useState, useEffect } from "react";
import { Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import "../Navbar/Navbar.css";
import ShopFilters from "../ShopByForHome";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [suppliers] = useState([
    { id: 1, name: "Shahwan", image: "src/assets/rug1/Shawan.webp" },
    {
      id: 2,
      name: "Absi",
      image: "src/assets/rug3/lu-jianfeng-QuMvwbkOvVQ-unsplash.jpg",
    },
    { id: 3, name: "AL-Jezawi", image: "src/assets/930.jpg" },
    {
      id: 4,
      name: "AL-Hosam",
      image: "src/assets/rug7/lotus-design-n-print-SWOmTM6WivM-unsplash.jpg",
    },
    {
      id: 5,
      name: "AL Mohtarefoon",
      image: "src/assets/rug3/jonathan-borba-oR_cCAa7Lsg-unsplash.jpg",
    },
  ]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/approved"
        );
        setProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="relative min-h-screen ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="src/assets/rug7/6163.jpg"
            alt="Fireplace with brick wall"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative min-h-screen flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center px-6 md:px-12">
            <div className="max-w-lg">
              <div className="bg-[#FBE7C6] p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-serif mb-4 text-gray-800">
                  Now Online
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  You can order the Rug with a lot of designs with saving time,
                  money and effort
                </p>
                <button className="px-6 py-2 bg-gray-900 text-white rounded border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="relative bg-gray-800/80 py-4">
            <div className="container mx-auto px-6">
              <div className="flex justify-end gap-6">
                <a
                  href="#"
                  className="text-white hover:text-[#FBE7C6] transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FBE7C6] transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FBE7C6] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#FBE7C6] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">BestSellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 bg-white hover:bg-[#f8dca6] group"
            >
              <div className="relative aspect-square">
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-lg font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section class="bg-white dark:bg-[#444444]">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Carpets are created by :
            </h2>
            <p class="mb-4">
              <strong className="text-white">
                Hand-made: <br />
              </strong>
              handmade rugs are crafted with passion and precision, weaving
              together tradition, artistry, and the finest materials to create
              masterpieces that tell a story in every thread.
            </p>
            <p>
              <strong className="text-white">
                Machine-made: <br />
              </strong>
              machine-made rugs combine advanced technology with impeccable
              design, delivering durability and style that perfectly complement
              your modern lifestyle.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full h-100 rounded-lg"
              src="src/assets/12634.jpg"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full h-100 lg:mt-10 rounded-lg"
              src="src/assets/sew-8353303_1280.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <div className=" py-12">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-4xl font-medium text-black text-center mb-12">
            Our suppliers
          </h2>

          {/* Scrolling container */}
          <div className="flex overflow-x-auto gap-8 pb-8 px-4 no-scrollbar">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="flex-none w-64 group">
                {/* Supplier name */}
                <p className="text-black text-lg mb-3">{supplier.name}</p>

                {/* Card with transform effect */}
                <div className="relative transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">
                  <div className="bg-white/10 rounded-lg p-1">
                    <img
                      src={supplier.image}
                      alt={supplier.name}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>

                  {/* Shadow effect */}
                  <div className="absolute inset-0 shadow-xl rounded-lg transform translate-y-2 -z-10 bg-black/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Choose Our Rugs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-4xl font-medium text-gray-900 text-center mb-12">
            Why Choose Our Rugs?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Premium Quality",
                icon: "🏆",
                description:
                  "Crafted with the finest materials to ensure durability and comfort.",
              },
              {
                title: "Handmade & Unique",
                icon: "🧵",
                description:
                  "Each rug is a masterpiece, woven with traditional craftsmanship.",
              },
              {
                title: "Eco-Friendly",
                icon: "🌱",
                description:
                  "We use sustainable materials to protect the environment.",
              },
              {
                title: "Fast & Free Shipping",
                icon: "🚚",
                description:
                  "Get your favorite rug delivered quickly with no extra cost.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
