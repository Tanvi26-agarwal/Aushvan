import useStore from "../../Zustand/State"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const { setUser } = useStore();

  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setUser({ name: data.name }); 
        navigate("/"); 
        alert("Login successful!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit" className="bg-blue-600 text-white py-2">Login</button>
    </form>
  );

}


export default Login;
