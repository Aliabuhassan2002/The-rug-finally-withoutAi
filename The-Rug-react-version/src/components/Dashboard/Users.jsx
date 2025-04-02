// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch users from the backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/users", { withCredentials: true })
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Delete a user
//   const handleDeleteUser = (userId) => {
//     axios
//       .delete(`http://localhost:5000/api/admin/users/${userId}`, {
//         withCredentials: true,
//       })
//       .then(() => {
//         setUsers(users.filter((user) => user._id !== userId));
//       })
//       .catch((error) => console.error("Error deleting user:", error));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Users</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Role</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border-b">{user.name}</td>
//               <td className="py-2 px-4 border-b">{user.email}</td>
//               <td className="py-2 px-4 border-b">{user.role}</td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   onClick={() => handleDeleteUser(user._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Trash2 } from "lucide-react";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch users from the backend
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/users", { withCredentials: true })
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   // Delete a user
//   const handleDeleteUser = (userId) => {
//     axios
//       .delete(`http://localhost:5000/api/admin/users/${userId}`, {
//         withCredentials: true,
//       })
//       .then(() => {
//         setUsers(users.filter((user) => user._id !== userId));
//       })
//       .catch((error) => console.error("Error deleting user:", error));
//   };

//   return (
//     <div className="p-8 bg-[#FAF7F0] min-h-screen">
//       <motion.h1
//         className="text-3xl font-bold text-[#4A4947] mb-6 tracking-wide"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Users Management
//       </motion.h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <motion.div
//             key={user._id}
//             className="bg-[#D8D2C2] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-xl font-semibold text-[#4A4947]">
//               {user.name}
//             </h2>
//             <p className="text-sm text-gray-700">{user.email}</p>
//             <span className="block mt-2 text-gray-600 font-medium">
//               Role: {user.role}
//             </span>
//             <motion.button
//               onClick={() => handleDeleteUser(user._id)}
//               className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
//               whileHover={{ scale: 1.2 }}
//             >
//               <Trash2 size={18} />
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Users;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import ProviderRequests from "./ProviderReq"; // Import the new component

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("users"); // Add state for tabs

  // Fetch users from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users", { withCredentials: true })
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Delete a user
  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/api/admin/users/${userId}`, {
        withCredentials: true,
      })
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="p-8 bg-[#FAF7F0] min-h-screen mt-30">
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-3xl font-bold text-[#4A4947] tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "users" ? "Users Management" : "Provider Requests"}
        </motion.h1>

        <div className="flex bg-[#D8D2C2] rounded-lg p-1">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "users"
                ? "bg-white text-[#4A4947]"
                : "text-[#4A4947]"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "requests"
                ? "bg-white text-[#4A4947]"
                : "text-[#4A4947]"
            }`}
          >
            Provider Requests
          </button>
        </div>
      </div>

      {activeTab === "users" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <motion.div
              key={user._id}
              className="bg-[#D8D2C2] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold text-[#4A4947]">
                {user.name}
              </h2>
              <p className="text-sm text-gray-700">{user.email}</p>
              <span className="block mt-2 text-gray-600 font-medium">
                Role: {user.role}
              </span>
              {user.isApproved && user.role === "provider" && (
                <span className="block mt-1 text-sm text-green-600">
                  Approved Provider
                </span>
              )}
              <motion.button
                onClick={() => handleDeleteUser(user._id)}
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Trash2 size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      ) : (
        <ProviderRequests />
      )}
    </div>
  );
};

export default Users;
