// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
//     >
//       <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-96 border border-white/20">
//         <h2 className="text-2xl font-semibold text-center text-white mb-6">Register</h2>
        
//         <form>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>

//            <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter your address"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>
//            <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter your phone"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>

//           <div className="mb-6">
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
//             />
//           </div>
//         <Link to={"/"}>
//           <button
//             type="submit"
//             className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
//             >
//             Register
//           </button>
//               </Link>
//         </form>

//         <p className="text-center text-white mt-4">
//           Already have an account? <a href="#" className="underline">Log In</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        password: formData.password,
      }, { withCredentials: true });

      Cookies.set("token", data.token, { expires: 7 });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}>
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-96 border border-white/20">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          {["name", "email", "address", "phone", "password", "confirmPassword"].map((field, index) => (
            <div className="mb-4" key={index}>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
                required
              />
            </div>
          ))}

          <button type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            Register
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account? <Link to="/login" className="underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
