import React, { useState } from "react";
import logo from "/assets/logo.png";

const App = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      alert("Email sent!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(inputEmail));
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <img
        src={logo}
        alt="KaKo logo"
        className="xl:w-1/4 md:w-[40%] max-sm:w-[40%]"
      />
      <h1 className="text-white text-4xl font-righteous mb-4">Coming Soon</h1>
      <p className="text-gray-400 text-lg mb-8 max-sm:text-sm max-sm:text-center">
        I&apos;m working hard to bring you something amazing!
      </p>

      <form className="flex gap-4 max-sm:flex-col" onSubmit={handleClick}>
        <input
          type="email"
          placeholder="Enter your email"
          className={`bg-gray-800 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            !isValidEmail && "ring ring-red-500"
          }`}
          value={email}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default App;
