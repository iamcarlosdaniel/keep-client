import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";

import MainLayout from "../layouts/mainLayout";
import PrimaryButton from "../components/button/PrimaryButton";
import PrimaryInput from "../components/Input/PrimaryInput";

// Importar el componente de Toast
import Toast from "../components/Toast/Toast";

import { BsBoxArrowInRight, BsFeather } from "react-icons/bs";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar las credenciales al backend para login
      await axios.post(
        "http://localhost:3000/api/v1/auth/sign-in",
        { email, password },
        { withCredentials: true } // Permitir el uso de cookies
      );

      // Si el login es exitoso, redirige al dashboard
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Credenciales incorrectas");
    }
  };

  return (
    <MainLayout className="w-100">
      <h1 className="text-3xl mb-2">Sign In to your Account</h1>
      <p className="mb-4">Welcome back ❤! Please sign in</p>
      <form onSubmit={handleSubmit} className="space-y-1">
        <PrimaryInput
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <PrimaryInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-end">
          <Link
            to={"/forgot-password"}
            className="text-blue-600 hover:text-blue-700 underline "
          >
            Forgot your password?
          </Link>
        </div>

        {error && <p>{error}</p>}

        <PrimaryButton
          text="Sign in "
          icon={<BsBoxArrowInRight />}
          className="w-full mt-4 shadow-lg"
          type="submit"
        />
      </form>

      <div className="mt-6 mb-3 text-center">
        <p>
          Don&apos;t have an account?
          <Link
            to={"/sign-up"}
            className="ms-2 text-blue-600 hover:text-blue-700 underline "
          >
            Sign Up
          </Link>
        </p>
      </div>

      <div className=" mt-3 mb-3 text-center">
        <p>&copy; 2025</p>
      </div>
    </MainLayout>
  );
};

export default SignIn;
