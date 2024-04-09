import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { updateUserEmail } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name cannot be empty";
    }

    if (username.trim() === "") {
      newErrors.username = "Username cannot be empty";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Add validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // Add logic to check if username is already taken
    if (username === "existing_username") {
      newErrors.username = "Username is already taken";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, proceed with signup process
      // Add your signup logic here
      updateUserEmail(email); // Update email in context

      navigate("/profile");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between h-screen">
      <div className="bg-gradient-to-t from-yellow-400 to-yellow-600 min-h-screen p-8 bg-blend-screen">
        <header className="text-black text-center mb-8">
          <div className="font-sacramento flex flex-col items-start text-2xl text-black">
            <div className="text-amber-700 text-start mb-3">dribbble</div>
            <div className="text-2xl text-start p-0 w-1/2 font-bold font-sans text-amber-700">
              Discover the world’s top Designers & Creatives.
            </div>
          </div>{" "}
        </header>
        <main className="flex justify-center items-center">
          <div className="rounded-lg w-full">
            {/* Content goes here */}
            <img
              className="w-4/5"
              src="https://media.istockphoto.com/id/1297483876/vector/flat-design-vector-illustration-infographic-concept-with-icons-set-of-gamification-strategy.jpg?s=612x612&w=0&k=20&c=Ao7zCzvafPZHoAb1PfvajvtFsmknrLdNXZH0TzvqGp0="
              alt=""
            />
          </div>
          <div className="m-4">{/* Stylized trees and email interface */}</div>
        </main>
        <footer className="mt-8">
          <p>Art by <span className="underline">Peter Tarka</span></p>
        </footer>
      </div>

      <div className="w-full md:w-1/2 bg-white-100 p-8">
        <div className="text-right mb-4">
          <p>
            Already a member?{" "}
            <a href="/login" className="text-blue-500">
              Sign In
            </a>
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Sign up to Dribbble</h2>
        {Object.keys(errors).length > 0 && (
          <div className="mb-4">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="text-red-500 mb-1">
                {error}
              </p>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="john_doe"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.username ? "border-red-500" : ""
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******************"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <p className="text-xs text-gray-600">
              Password must be at least 6 characters long.
            </p>
          </div>

          <div className="p-4 bg-white rounded shadow-lg max-w-md  m-2">
            <p className="text-sm text-gray-600">
              <input type="checkbox" />
              Creating an account means you're okay with our{" "}
              <a
                href="/terms"
                className="text-purple-600 underline hover:text-purple-800"
              >
                Terms of Service
              </a>
              ,{" "}
              <a
                href="/privacy"
                className="text-purple-600 underline hover:text-purple-800"
              >
                Privacy Policy
              </a>
              , and our default{" "}
              <a
                href="/notifications"
                className="text-purple-600 underline hover:text-purple-800"
              >
                Notification Settings
              </a>
              .
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
